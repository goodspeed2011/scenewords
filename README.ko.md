[English](README.md) · [中文](README.zh.md) · **한국어** · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md)

<p>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#dive_verb_01"><img src="media/thumb/dive_verb_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#bakery_noun_01"><img src="media/thumb/bakery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#colorful_adj_01"><img src="media/thumb/colorful_adj_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#warehouse_noun_01"><img src="media/thumb/warehouse_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#whale_noun_01"><img src="media/thumb/whale_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#chef_noun_01"><img src="media/thumb/chef_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#luggage_noun_01"><img src="media/thumb/luggage_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#elephant_noun_01"><img src="media/thumb/elephant_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#supervisor_noun_01"><img src="media/thumb/supervisor_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#pottery_noun_01"><img src="media/thumb/pottery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#ice_cream_noun_01"><img src="media/thumb/ice_cream_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ko#violin_noun_01"><img src="media/thumb/violin_noun_01.webp" width="128" alt=""></a>
</p>

# Scenewords

일과 일상에서 자주 쓰는 영어 단어 600개. 단어마다 그림 한 장과 그 그림을 설명하는 문장 하나가 있습니다.

단어 목록: TOEIC® Service List 1.2. Dictation Trainer가 만들었습니다.

단어 **600**개 · 그림 **600**장 · 예문 **600**개 · 모든 단어의 미국식 발음 · 뜻풀이: 中文 · 한국어 · 日本語 · Tiếng Việt · CC BY-SA 4.0

[그림 둘러보기](https://scenewords.dictationtrainer.com/?lang=ko) · [내려받기](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip) · [Hugging Face](https://huggingface.co/datasets/goodspeed2011/scenewords) · [Anki 덱](https://github.com/goodspeed2011/scenewords/releases/latest) → **[dictationtrainer.com에서 받아쓰기 연습하기](https://dictationtrainer.com/ko/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source)**

## 예시

| 그림 | 단어 | 예문 | 단어 카드 |
| --- | --- | --- | --- |
| <img src="media/thumb/deadline_noun_01.webp" width="72" alt="The designer is working late to meet the deadline."> | **deadline** n.<br>/ˈdɛdˌlaɪn/<br>마감 기한, 마감일 | The designer is working late to meet the **deadline**. | [열기](https://scenewords.dictationtrainer.com/?lang=ko#deadline_noun_01) |
| <img src="media/thumb/luggage_noun_01.webp" width="72" alt="A woman is pulling her luggage past a row of empty seats."> | **luggage** n.<br>/ˈlʌɡədʒ/<br>(여행) 짐, 수하물 | A woman is pulling her **luggage** past a row of empty seats. | [열기](https://scenewords.dictationtrainer.com/?lang=ko#luggage_noun_01) |
| <img src="media/thumb/sunscreen_noun_01.webp" width="72" alt="She is putting on sunscreen."> | **sunscreen** n.<br>/ˈsʌnˌskrin/<br>자외선 차단제, 선크림 | She is putting on **sunscreen**. | [열기](https://scenewords.dictationtrainer.com/?lang=ko#sunscreen_noun_01) |

600개 전부 [그림 보기 페이지](https://scenewords.dictationtrainer.com/?lang=ko)에 있습니다.

## 여기에 있는 것과 사이트에 있는 것

<table>
<tr>
<td valign="top" width="50%">

**이 저장소에 있는 것**

- 그림(768 px WebP와 256 px 섬네일)
- 단어, 품사, 미국식 발음 기호, 영어 뜻풀이, 주제
- 중국어·한국어·일본어·베트남어 뜻풀이
- 각 그림의 예문
- 모든 단어의 미국식 발음
- 각 그림의 바탕이 된 장면 설명

</td>
<td valign="top" width="50%">

**[dictationtrainer.com](https://dictationtrainer.com/ko/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source)에 있는 것**

- 모든 예문의 음성
- 예문 번역
- 단어별로 채점해 주는 레슨 40개
- 오답 노트와 복습
- 600단어 그림 벽

</td>
</tr>
</table>

## 파일 구성

```
data/words.json          항목 600개, 모든 필드
data/words.csv           같은 데이터, 단어마다 한 행
data/topics.json         주제 11개, 5개 언어로 된 이름
media/img/               768 px WebP, 단어마다 하나
media/thumb/             256 px WebP
media/audio/word-us/     MP3, 단어마다 하나
docs/                    dataset.md · pipeline.md · quality.md
index.html, viewer/      그림 보기 페이지
scripts/validate.mjs     필드와 미디어 파일 검사
PUBLIC_MANIFEST.json     모든 파일의 크기와 SHA-256
```

모든 필드의 설명은 [docs/dataset.md](docs/dataset.md)에 있습니다. 내려받은 파일을 확인하려면 `node scripts/validate.mjs --hashes`를 실행하세요.

## 내 컴퓨터에서 열기, 직접 배포하기

- [저장소를 내려받아](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip) 압축을 풀고 `index.html`을 더블클릭하세요. 인터넷에 연결하지 않아도 열립니다.
- 웹 서버로 폴더를 열어도 됩니다. 예를 들어 폴더 안에서 다음 명령을 실행하고

  ```
  python3 -m http.server 8765
  ```

  브라우저에서 http://127.0.0.1:8765/ 을 여세요.
- 빌드 과정이 없는 정적 사이트입니다. 직접 온라인에 올리려면 폴더 전체를 GitHub Pages, Cloudflare Pages, Netlify 같은 정적 호스팅에 올리면 됩니다. 페이지 아래쪽의 출처 표시는 그대로 두세요. CC BY-SA 4.0이 요구하는 사항입니다.

## 만든 방법

- **단어**: TOEIC® Service List 1.2의 단어 1,250개 가운데 그림으로 그릴 수 있는 600개를 골랐습니다.
- **예문과 뜻풀이**: AI의 도움을 받아 작성하고 스크립트로 검사했습니다. 예문마다 단어 목록에 있는 단어는 해당 단어 하나뿐입니다.
- **그림**: 글로 쓴 장면 설명을 바탕으로 AI 이미지 모델이 단어마다 한 장씩 그렸습니다. AI 검토자가 미리 적어 둔 점검 목록에 따라 모든 그림을 확인했습니다. 글자나 로고가 없는지, 동작이 맞는지, 손 개수가 맞는지를 보았습니다. 63장은 다시 그렸습니다. 처음 235장은 프로젝트 관리자도 검토 결과를 확인했습니다.
- **발음**: 미국식 발음 기호는 CMU 발음 사전에서 가져왔습니다. 사전에 알맞은 형태가 없는 73개 단어는 AI가 발음 기호를 따로 작성했습니다. 발음 파일은 합성 음성이며 음성 인식으로 확인했습니다.
- **번역**: AI로 작성했으며 아직 원어민의 검토를 받지 않았습니다. 수정 제안을 환영합니다. [이슈로 알려 주세요](https://github.com/goodspeed2011/scenewords/issues).

자세한 내용과 아직 부족한 점은 [docs/pipeline.md](docs/pipeline.md)와 [docs/quality.md](docs/quality.md)에 있습니다.

## 라이선스

| | |
| --- | --- |
| **콘텐츠** | 단어, 예문, 뜻풀이, 장면 설명, 그림, 발음: [CC BY-SA 4.0](CONTENT_LICENSE.md) |
| **코드** | [MIT](LICENSE) |
| **단어 목록** | TOEIC® Service List 1.2, Charles Browne·Brent Culligan, CC BY-SA 4.0 |
| **그림과 발음** | AI로 생성했습니다. 저희가 권리를 가진 범위 안에서만 라이선스를 부여합니다. |
| **발음 기호** | 대부분 CMU 발음 사전(CMU Pronouncing Dictionary, BSD 라이선스)에서 변환했습니다. |

출처를 표시할 때는 이렇게 적어 주세요: Scenewords by Dictation Trainer, CC BY-SA 4.0, https://github.com/goodspeed2011/scenewords

---

<sub>TOEIC은 ETS의 등록 상표입니다. 이 프로젝트는 ETS의 보증이나 승인을 받지 않았습니다.</sub>
