# Content license

The code in this repository (`index.html`, `viewer/` apart from the fonts, and `scripts/`) is under the MIT License in [LICENSE](LICENSE). Everything else is content. The content is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/) (CC BY-SA 4.0), within the limits below.

## What the content is

| Path | What it holds |
| --- | --- |
| `data/words.json`, `data/words.csv` | The 600 entries: word, part of speech, US IPA, definitions in English, Chinese, Korean, Japanese and Vietnamese, example sentence, scene description, topic, rank in the word list |
| `data/topics.json` | The 11 topics and their names |
| `media/img/`, `media/thumb/` | The illustrations |
| `media/audio/word-us/` | The pronunciation of each word |
| `docs/` and the README files | The documentation |

## Why ShareAlike

The words come from the TOEIC® Service List 1.2 by Charles Browne and Brent Culligan, which is licensed CC BY-SA 4.0. Our selection of 600 of its words, and the material built on that selection, are shared under the same license.

## AI-generated illustrations and audio

The illustrations were generated with an AI image model, and the pronunciations with a speech synthesis model. In many countries, material that an AI generates without enough human authorship is not protected by copyright. We license the illustrations and the audio under CC BY-SA 4.0 only to the extent that we hold rights in them, and we claim no rights that we do not have. Where nobody holds rights in them, you may use them freely, though a credit is still appreciated.

The voice is a preset synthetic voice. It is not a recording or a clone of a real person.

## How to credit

CC BY-SA 4.0 asks you to credit the work, link to the license, say whether you changed it, and share what you make from it under the same license. A credit can look like this:

> Scenewords by Dictation Trainer (https://github.com/goodspeed2011/scenewords), CC BY-SA 4.0. Word list: TOEIC® Service List 1.2 by Charles Browne and Brent Culligan, CC BY-SA 4.0.

If you show only a few pictures, a short line next to them is enough, for example "Picture: Scenewords, CC BY-SA 4.0".

## Third-party material

**TOEIC® Service List 1.2.** Browne, C., & Culligan, B. (2013). *The TOEIC Service List*. Retrieved from https://www.newgeneralservicelist.com/toeic-service-list. License: CC BY-SA 4.0. We use 600 of its headwords and their ranks. Two of them appear in our entries in the plural (headphones, headquarters); the field `tsl.headword` keeps the list's own form.

**CMU Pronouncing Dictionary.** The US IPA transcriptions marked `"source": "cmudict"` were converted from the CMU Pronouncing Dictionary, which is distributed under this notice:

```
Copyright (C) 1993-2015 Carnegie Mellon University. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
   The contents of this file are deemed to be source code.

2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in
   the documentation and/or other materials provided with the
   distribution.

This work was supported in part by funding from the Defense Advanced
Research Projects Agency, the Office of Naval Research and the National
Science Foundation of the United States of America, and by member
companies of the Carnegie Mellon Sphinx Speech Consortium. We acknowledge
the contributions of many volunteers to the expansion and improvement of
this dictionary.

THIS SOFTWARE IS PROVIDED BY CARNEGIE MELLON UNIVERSITY ``AS IS'' AND
ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL CARNEGIE MELLON UNIVERSITY
NOR ITS EMPLOYEES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

**Plus Jakarta Sans.** The picture browser uses the Plus Jakarta Sans typeface (`viewer/fonts/`), licensed under the SIL Open Font License 1.1. The license is in `viewer/fonts/OFL.txt`.

## Trademarks

TOEIC is a registered trademark of ETS. This project is not endorsed or approved by ETS.

CC BY-SA 4.0 does not cover trademarks. The names Scenewords and Dictation Trainer are not licensed with the content: please do not use them in a way that suggests your work is ours or that we endorse it.
