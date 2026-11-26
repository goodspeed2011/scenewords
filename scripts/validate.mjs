#!/usr/bin/env node
// Check data/words.json and data/topics.json, and that every media file they name is here.
//   node scripts/validate.mjs            fields and files
//   node scripts/validate.mjs --hashes   also compare every file with PUBLIC_MANIFEST.json
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => JSON.parse(readFileSync(join(root, p), 'utf8'));
const words = read('data/words.json');
const topics = read('data/topics.json');
const LANGS = ['en', 'zh', 'ko', 'ja', 'vi'];
const POS = new Set(['noun', 'verb', 'adjective', 'adverb']);
const topicIds = new Set(topics.map((t) => t.id));
const errors = [];
const seen = new Set();

for (const w of words) {
  const at = w.id ?? '(no id)';
  if (!/^[a-z0-9_]+$/.test(w.id ?? '')) errors.push(`${at}: id must be lowercase letters, digits and underscores`);
  if (seen.has(w.id)) errors.push(`${at}: duplicate id`);
  seen.add(w.id);
  if (!w.word) errors.push(`${at}: no word`);
  if (!POS.has(w.pos)) errors.push(`${at}: unknown part of speech "${w.pos}"`);
  if (!/^\/.+\/$/.test(w.ipa?.us ?? '')) errors.push(`${at}: ipa.us is missing or not written /…/`);
  for (const l of LANGS) if (!w.definition?.[l]) errors.push(`${at}: definition.${l} is missing`);
  if (!w.sentence?.text) errors.push(`${at}: no sentence`);
  else if (!w.sentence.target || !w.sentence.text.includes(w.sentence.target)) {
    errors.push(`${at}: sentence.target is not in the sentence`);
  }
  if (!w.scene) errors.push(`${at}: no scene`);
  if (!topicIds.has(w.topic)) errors.push(`${at}: unknown topic "${w.topic}"`);
  for (const f of [w.image?.file, w.image?.thumb, w.audio?.us]) {
    if (!f) errors.push(`${at}: a media path is missing`);
    else if (!existsSync(join(root, f))) errors.push(`${at}: ${f} not found`);
  }
  if (!/^https:\/\/dictationtrainer\.com\/sets\/[a-z0-9-]+#sentence-\d+$/.test(w.practice ?? '')) {
    errors.push(`${at}: practice link is malformed`);
  }
}
for (const t of topics) {
  const n = words.filter((w) => w.topic === t.id).length;
  if (n !== t.count) errors.push(`topic ${t.id}: count says ${t.count}, data has ${n}`);
}

// viewer/data.js is the same data as a script, for opening index.html as a file. It must match.
const bundle = join(root, 'viewer/data.js');
if (existsSync(bundle)) {
  const m = readFileSync(bundle, 'utf8').match(/window\.SCENEWORDS = (.*);\s*$/s);
  let same = false;
  try {
    const b = JSON.parse(m[1]);
    same = JSON.stringify(b.words) === JSON.stringify(words) && JSON.stringify(b.topics) === JSON.stringify(topics);
  } catch { /* reported below */ }
  if (!same) errors.push('viewer/data.js does not match data/words.json and data/topics.json');
}

const hashes = process.argv.includes('--hashes');
if (hashes) {
  for (const f of read('PUBLIC_MANIFEST.json').files) {
    const p = join(root, f.path);
    if (!existsSync(p)) errors.push(`${f.path}: listed in PUBLIC_MANIFEST.json but not here`);
    else if (createHash('sha256').update(readFileSync(p)).digest('hex') !== f.sha256) {
      errors.push(`${f.path}: differs from PUBLIC_MANIFEST.json`);
    }
  }
}

if (errors.length) {
  console.error(errors.slice(0, 40).join('\n'));
  if (errors.length > 40) console.error(`… and ${errors.length - 40} more`);
  console.error(`${errors.length} problems in ${words.length} entries`);
  process.exit(1);
}
console.log(`ok: ${words.length} entries, ${topics.length} topics${hashes ? ', every file matches PUBLIC_MANIFEST.json' : ''}`);
