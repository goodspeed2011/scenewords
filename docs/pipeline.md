# How Scenewords was made

Scenewords was made by one maintainer working with AI tools. This page says which tool did what, and what was checked along the way. What is still imperfect is in [quality.md](quality.md).

| Step | Done by |
| --- | --- |
| Choosing the words | Claude (an AI model by Anthropic) |
| Sentences, English definitions, scene descriptions | Claude, checked by scripts |
| Pictures | The image tool built into OpenAI Codex |
| Reviewing the pictures | Claude; the maintainer confirmed the first 235 |
| IPA | The CMU Pronouncing Dictionary; 73 entries written by Claude |
| Audio | MiniMax speech-2.8-turbo, through fal |
| Checking the audio | whisper.cpp (large-v3-turbo), run locally |
| Chinese, Korean, Japanese and Vietnamese definitions | Claude |
| Packaging | Scripts |

## 1. Choosing the words

The words come from the TOEIC® Service List 1.2 (Browne and Culligan), 1,250 words drawn from a 1.5-million-word corpus of TOEIC® test preparation material.

- 13 words that are about test-taking itself were left out, such as *infer*, *distractor* and *paraphrase*.
- From the rest, 600 were chosen because one picture can show them: *luggage*, *ladder*, *escalator*, *refund*. The other 637 are for a later version.
- Each word has one entry for one sense: the sense the picture shows.
- The 600 words were grouped into 11 topics, from the office to leisure.

## 2. Writing the entries

For each word, Claude wrote the sense to draw, a short English definition, one sentence that describes the picture, and a scene for the illustrator. The work went in batches of about 60 words.

Scripts checked every batch:

- The target word appears in the sentence exactly once.
- No other word from the TOEIC® Service List appears in the sentence, so each sentence holds exactly one word from the list.
- Every field is present, and every id is unique.

Definitions were checked for other list words from the second batch on. Eight earlier definitions still use one, such as *ink* in the definition of *toner*.

The scenes were written so that a picture could not go wrong in the usual ways. Each person has an age, a hairstyle and clothes; each hand has one job; nothing in the scene carries text, numbers or a logo. Some rules came from earlier batches, where pictures had to be drawn again:

- Cars are seen from the side, on a straight road. Seen from the front, they grew badges on the grille.
- Laptops, tablets and phones appear only when the word needs them. Their lids and backs grew logos.
- Sleeves are plain down to the cuff, and shoes stay out of the frame, because buttons and running shoes grew marks that looked like letters.
- A clock appears only when the word needs one (*noon*, *midnight*), and then with hands and ticks but no numbers.

Four sentences were rewritten after the pictures were done, because they did not match them. One, for example, counted far more teapots than the picture shows.

## 3. Drawing the pictures

Each picture was drawn on its own, at 1254 × 1254 px, from its scene and a fixed description of the style: a soft storybook look, light pastel colours, warm light, everyday places. The scene of every picture is in the data (`scene`); the style description is not published.

Claude reviewed every picture, in batches:

- Each picture at full size, then every suspicious spot enlarged 1.5 to 15 times. Light surfaces were also viewed through a high-contrast grey filter, to find faint marks.
- Anything that reads as a letter, digit, logo or symbol fails: on screens, book spines, car grilles, clothing, tools, packaging and signs.
- The picture must show the sense of the word, and the action in the sentence, in the right direction.
- People must have the right number of hands, arms and legs, and the main person must match the sentence (*she* or *he*).
- The picture must still read at 256 px and at 128 px.

A picture that failed was described again and drawn again. 63 words needed this: 53 were drawn twice, 9 three times and 1 four times. In all, 674 pictures were drawn to keep 600.

Who approved them: for 235 pictures (the first four batches and one pilot batch), the maintainer read Claude's review and confirmed it. For the other 365, the maintainer let Claude's review stand as the approval, so a person did not look at each of them before it was approved.

The approved pictures were resized to 768 px (WebP, quality 82) and 256 px (WebP, quality 80).

## 4. Pronunciation

**IPA.** The American pronunciations were converted from the CMU Pronouncing Dictionary. Claude wrote the other 73: words the dictionary does not have, and words where its pronunciation did not fit our sense or spelling, such as a noun's stress where we need the verb. The field `ipa.source` says which is which.

**Audio.** Each word was spoken by MiniMax speech-2.8-turbo, called through fal, with one preset voice. The voice is synthetic; it is not a recording or a clone of a real person. Sentence audio is used on dictationtrainer.com and is not part of this repository.

**Checking the audio.** Every file was transcribed by whisper.cpp (model large-v3-turbo) on the maintainer's computer, with no hint of the expected word. 578 of 600 came back as exactly the word. The other 22 came back as words that sound the same or almost the same, such as *fare* → "fair", *aisle* → "I'll", *gym* → "Jim". Speech recognition cannot tell those apart without context. Where an ending was in doubt (*congratulation* or *congratulations*), the sound itself was measured: the recording ends in a nasal, not an *s*.

## 5. Translations

Claude wrote the Chinese, Korean, Japanese and Vietnamese definitions as short learner glosses of the pictured sense, not as translations of the English definition. Scripts checked their format and punctuation. They have not been reviewed by native speakers.

## 6. Packaging

The repository is built by a script from a list of allowed files; any other file is refused. Before each build is accepted, the script scans every text file for keys, private paths, e-mail addresses and internal names, and checks that every entry has its four definitions, its IPA and its audio. `PUBLIC_MANIFEST.json` records the size and SHA-256 of every file, and `scripts/validate.mjs` checks a copy against it.
