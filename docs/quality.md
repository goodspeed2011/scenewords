# Quality: what was checked, and what is still imperfect

How each part was made is in [pipeline.md](pipeline.md). This page says how far each part was checked, and what we know is still not right.

## What was checked

| Part | Checked by | Result |
| --- | --- | --- |
| Sentences | Scripts: the word appears exactly once, and no other word from the TOEIC® Service List appears | All 600 pass |
| English definitions | Scripts, from the second batch on: no other word from the list | 8 earlier definitions still use one |
| Pictures | Claude reviewed every picture; the maintainer confirmed the review of 235 | 74 drawn pictures were rejected; 63 words were drawn again |
| Chinese, Korean, Japanese and Vietnamese definitions | Scripts, for format and punctuation only | Not reviewed by native speakers |
| IPA | 527 from the CMU Pronouncing Dictionary, 73 written by Claude | The 73 were not checked against a second source |
| Audio | Speech recognition on every file, with no hint of the expected word | 578 recognised exactly; the other 22 are homophones |
| The package | Scripts: allowed files only, a scan for keys and private data, a hash for every file | Run before every release |

## Known limits

**One sense per word.** Each entry shows the one sense in its picture. Other senses, phrases and typical word partners are not covered: *dock* here is a loading dock, not a verb.

**The sentences describe pictures.** About three in four use the present continuous (*A woman is pulling her luggage …*). They show the word in a scene, not the full range of how it is used.

**Definitions in four languages.** They were written by an AI as short glosses and have not been reviewed by native speakers. Some may be stiff, too narrow or slightly off. Corrections are welcome.

**Pictures.** The pictures are AI-generated. Each was checked for text, logos, symbols and anatomy, but small differences from the scene were accepted when they did not change the meaning: an egg box with ten cups for a dozen eggs, a glove held in the other hand, an object in the background that the scene did not ask for. Very faint marks that do not read as anything were accepted too. If you find a hidden letter, a logo or an extra finger, please report it.

**IPA.** American English only, and one pronunciation per word where two are accepted. The 73 transcriptions that Claude wrote (`"source": "manual"`) are more likely to hold a mistake than the dictionary ones.

**Audio.** One synthetic American voice. Speech recognition cannot hear stress, so stress was not checked word by word. A rough acoustic check of the two-syllable words whose stress can vary found one doubtful case: *escort* is a verb here, and its IPA marks the verb's stress (/ɛˈskɔrt/), but the recording may stress the first syllable, like the noun.

**Homophones.** *Fare* and *fair*, *aisle* and *I'll*, *suite* and *sweet* sound the same. Heard alone, the recording cannot tell them apart; the sentence does.

**The word list.** The TOEIC® Service List was built from test preparation material, so its words and ranks follow that material rather than English in general. Our topics are our own grouping, and some words would fit more than one.

## Reporting a problem

Open an issue at https://github.com/goodspeed2011/scenewords/issues with the entry's `id` (for example `client_noun_01`) and what is wrong. For a picture, say where the problem is, such as "on the man's left sleeve". Corrections from native speakers of Chinese, Korean, Japanese or Vietnamese are especially welcome.

An `id` never changes. When a picture or a recording is replaced, the file keeps its name and the release notes say what changed.
