# The data

Scenewords has 600 entries. Each entry is one sense of one English word: the sense its picture shows.

- [Files](#files)
- [An entry](#an-entry)
- [Fields](#fields)
- [The CSV](#the-csv)
- [Topics](#topics)
- [Pictures and audio](#pictures-and-audio)
- [Numbers](#numbers)
- [Reading the data](#reading-the-data)
- [Checking a copy](#checking-a-copy)

## Files

| Path | Format |
| --- | --- |
| `data/words.json` | A JSON array of 600 entries, ordered by topic |
| `data/words.csv` | The same entries, one row per word |
| `data/topics.json` | The 11 topics |
| `media/img/<id>.webp` | The picture, 768 × 768 px |
| `media/thumb/<id>.webp` | The same picture, 256 × 256 px |
| `media/audio/word-us/<id>.mp3` | The word, spoken in American English |
| `PUBLIC_MANIFEST.json` | The package version, and every file with its size and SHA-256 |

All text files are UTF-8.

## An entry

```json
{
  "id": "client_noun_01",
  "word": "client",
  "pos": "noun",
  "ipa": { "us": "/ˈklaɪənt/", "source": "cmudict" },
  "definition": {
    "en": "A person or company that pays for professional services.",
    "zh": "客户；委托人",
    "ko": "고객, 의뢰인",
    "ja": "顧客、依頼人",
    "vi": "khách hàng"
  },
  "sentence": { "text": "A designer is showing some samples to her client.", "target": "client" },
  "scene": "In a bright design studio, a designer in her forties with a short black bob and red glasses sits at a round table and shows a fan of fabric color samples to her client, a middle-aged man with a shaved head who leans forward with interest. A cup of tea sits on the table.",
  "topic": "office",
  "tsl": { "headword": "client", "rank": 3 },
  "image": { "file": "media/img/client_noun_01.webp", "thumb": "media/thumb/client_noun_01.webp", "width": 768, "height": 768 },
  "audio": { "us": "media/audio/word-us/client_noun_01.mp3" },
  "practice": "https://dictationtrainer.com/sets/picture-office-1#sentence-1"
}
```

## Fields

| Field | Type | What it holds |
| --- | --- | --- |
| `id` | string | `<word>_<part of speech>_<number>`, in lowercase letters, digits and underscores. It never changes, and it names the picture and audio files. |
| `word` | string | The word as it is taught. One entry has a space (`ice cream`); three keep their accent (`café`, `entrée`, `résumé`). |
| `pos` | string | Part of speech of the sense in the picture: `noun`, `verb`, `adjective` or `adverb`. |
| `ipa.us` | string | American pronunciation in IPA, between slashes. Primary stress is `ˈ`, secondary stress `ˌ`. |
| `ipa.source` | string | `cmudict` when the transcription was converted from the CMU Pronouncing Dictionary; `manual` when Claude wrote it for this entry instead, because the word is missing from that dictionary or its form there did not fit this sense. |
| `definition.en` | string | A short definition of the sense in the picture, in plain English. |
| `definition.zh` | string | The same sense in Simplified Chinese: a short gloss, not a translation of the English definition. |
| `definition.ko` | string | The same, in Korean. |
| `definition.ja` | string | The same, in Japanese. |
| `definition.vi` | string | The same, in Vietnamese. |
| `sentence.text` | string | One sentence that describes the picture. |
| `sentence.target` | string | The word exactly as it appears in the sentence, which can be a plural, an `-ing` form or a capitalised form (`clapping`, `Pedestrians`). It appears in the sentence exactly once. |
| `scene` | string | The written scene that the picture was drawn from, in English. |
| `topic` | string | The `id` of a topic in `data/topics.json`. |
| `tsl.headword` | string | The headword in the TOEIC® Service List 1.2. It differs from `word` twice: `headphone` (headphones) and `headquarter` (headquarters). |
| `tsl.rank` | number | The word's rank in that list, from 1 to 1,250. |
| `image.file` | string | Path of the 768 px picture. |
| `image.thumb` | string | Path of the 256 px picture. |
| `image.width`, `image.height` | number | 768 and 768. |
| `audio.us` | string | Path of the MP3. |
| `practice` | string | The lesson on dictationtrainer.com that contains this sentence. The `#sentence-N` part jumps to the sentence. The Chinese, Korean and Japanese versions of the lesson are at `/zh/sets/…`, `/ko/sets/…` and `/ja/sets/…`. |

## The CSV

`data/words.csv` has a header row and one row per entry, comma-separated and quoted where needed (RFC 4180). The nested fields are flattened:

```
id, word, pos, ipa_us, ipa_source, definition_en, definition_zh, definition_ko, definition_ja, definition_vi,
sentence, sentence_target, scene, topic, tsl_headword, tsl_rank, image, thumb, audio_us, practice
```

## Topics

`data/topics.json` lists the 11 topics in the order the entries follow.

| `id` | English name | Entries |
| --- | --- | --- |
| `office` | Office and technology | 60 |
| `people-money` | People, training and money | 45 |
| `meetings` | Meetings and events | 30 |
| `travel` | Travel, transport and hotels | 90 |
| `shopping` | Shopping and customer service | 60 |
| `dining` | Food and dining | 75 |
| `shipping` | Factories and shipping | 30 |
| `buildings` | Buildings, repairs and construction | 45 |
| `home` | Home and daily life | 75 |
| `health` | Health and medical care | 30 |
| `leisure` | Leisure, sports and culture | 60 |

Each topic has `id`, `name` (in `en`, `zh`, `ko`, `ja` and `vi`), `count`, and `cover`: the `id` of the entry whose picture stands for the topic.

## Pictures and audio

- **Pictures**: WebP, square. `media/img/` is 768 px at quality 82, and `media/thumb/` is 256 px at quality 80. Both were made from 1254 × 1254 px PNG originals. The pictures contain no text, numbers, logos or signs on purpose, so the same picture works in any language.
- **Audio**: MP3, 32 kHz, mono, between 0.6 and 1.5 seconds. One American English voice says the word once.

## Numbers

- 600 entries: 478 nouns, 66 verbs, 49 adjectives and 7 adverbs.
- Sentences have 4 to 13 words (median 8). About three in four use the present continuous ("A woman is pulling her luggage …"), because they describe what is happening in a picture.
- In 104 sentences the word appears in another form: a plural, an `-ing` form or a capital letter.
- List ranks run from 2 to 1,250. 363 of the 600 words are in the list's first 600.
- 527 IPA transcriptions come from the CMU Pronouncing Dictionary, and Claude wrote the other 73.

## Reading the data

JavaScript (Node 18 or later):

```js
import { readFile } from 'node:fs/promises';

const words = JSON.parse(await readFile('data/words.json', 'utf8'));
const client = words.find((w) => w.id === 'client_noun_01');
console.log(client.word, client.ipa.us, client.definition.ja); // client /ˈklaɪənt/ 顧客、依頼人
```

Python:

```python
import json

with open('data/words.json', encoding='utf-8') as f:
    words = json.load(f)

travel = [w['word'] for w in words if w['topic'] == 'travel']
print(len(travel), travel[:5])
```

The same data, with the pictures and audio inside, is on [Hugging Face](https://huggingface.co/datasets/goodspeed2011/scenewords).

## Checking a copy

```
node scripts/validate.mjs           # every field, and every picture and MP3 the entries name
node scripts/validate.mjs --hashes  # also every file against PUBLIC_MANIFEST.json
```

An `id` never changes. If a picture or a recording is replaced in a later version, the file keeps its name and its hash in `PUBLIC_MANIFEST.json` changes.
