[English](README.md) · **中文** · [한국어](README.ko.md) · [日本語](README.ja.md) · [Tiếng Việt](README.vi.md)

<p>
<a href="https://scenewords.dictationtrainer.com/#dive_verb_01"><img src="media/thumb/dive_verb_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#bakery_noun_01"><img src="media/thumb/bakery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#colorful_adj_01"><img src="media/thumb/colorful_adj_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#warehouse_noun_01"><img src="media/thumb/warehouse_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#whale_noun_01"><img src="media/thumb/whale_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#chef_noun_01"><img src="media/thumb/chef_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#luggage_noun_01"><img src="media/thumb/luggage_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#elephant_noun_01"><img src="media/thumb/elephant_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#supervisor_noun_01"><img src="media/thumb/supervisor_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#pottery_noun_01"><img src="media/thumb/pottery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#ice_cream_noun_01"><img src="media/thumb/ice_cream_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/#violin_noun_01"><img src="media/thumb/violin_noun_01.webp" width="128" alt=""></a>
</p>

# Scenewords

600 个工作和生活中常用的英语词，每个词配一幅插画和一句描述这幅画的句子。

Dictation Trainer 制作 · 词表选自 TOEIC® Service List 1.2

**600** 个词 · **600** 幅插画 · **600** 个例句 · 每个词都有美音发音 · 中文、한국어、日本語、Tiếng Việt 释义 · CC BY-SA 4.0

**[去 dictationtrainer.com 练听写 →](https://dictationtrainer.com/zh/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source)** · [浏览插画](https://scenewords.dictationtrainer.com/) · [下载](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip) · [Hugging Face](https://huggingface.co/datasets/goodspeed2011/scenewords) · [Anki 牌组](https://github.com/goodspeed2011/scenewords/releases/latest)

## 示例

| 插画 | 单词 | 例句 | 练习 |
| --- | --- | --- | --- |
| <img src="media/thumb/deadline_noun_01.webp" width="72" alt="The designer is working late to meet the deadline."> | **deadline** n.<br>/ˈdɛdˌlaɪn/<br>截止日期；最后期限 | The designer is working late to meet the **deadline**. | [去听写这一句](https://dictationtrainer.com/zh/sets/picture-office-1?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source#sentence-6) |
| <img src="media/thumb/luggage_noun_01.webp" width="72" alt="A woman is pulling her luggage past a row of empty seats."> | **luggage** n.<br>/ˈlʌɡədʒ/<br>行李 | A woman is pulling her **luggage** past a row of empty seats. | [去听写这一句](https://dictationtrainer.com/zh/sets/picture-travel-1?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source#sentence-8) |
| <img src="media/thumb/sunscreen_noun_01.webp" width="72" alt="She is putting on sunscreen."> | **sunscreen** n.<br>/ˈsʌnˌskrin/<br>防晒霜 | She is putting on **sunscreen**. | [去听写这一句](https://dictationtrainer.com/zh/sets/picture-leisure-4?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source#sentence-14) |

全部 600 个词都在[插画浏览页](https://scenewords.dictationtrainer.com/)里。

## 仓库里有什么，网站上有什么

<table>
<tr>
<td valign="top" width="50%">

**在本仓库里**

- 插画（768 px WebP 和 256 px 缩略图）
- 单词、词性、美音音标、英文释义、话题
- 中文、韩语、日语、越南语释义
- 每幅插画配的例句
- 每个词的美音发音
- 每幅插画依据的场景描述

</td>
<td valign="top" width="50%">

**在 [dictationtrainer.com](https://dictationtrainer.com/zh/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source) 上**

- 每个例句的朗读音频
- 例句译文
- 40 节课，逐词批改
- 错题本和复习
- 600 词图墙

</td>
</tr>
</table>

## 文件

```
data/words.json          600 个词条，含全部字段
data/words.csv           内容同上，每个词一行
data/topics.json         11 个话题，有五种语言的名称
media/img/               768 px WebP，每个词一张
media/thumb/             256 px WebP
media/audio/word-us/     MP3，每个词一个
docs/                    dataset.md · pipeline.md · quality.md
index.html, viewer/      插画浏览页
scripts/validate.mjs     检查字段和媒体文件
PUBLIC_MANIFEST.json     每个文件的大小和 SHA-256
```

每个字段的说明见 [docs/dataset.md](docs/dataset.md)。要检查下载的文件，运行 `node scripts/validate.mjs --hashes`。

## 在自己电脑上打开，或自己部署一份

- [下载仓库](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip)，解压后双击 `index.html`，不联网也能用。
- 也可以用任意网页服务器打开这个文件夹。比如在文件夹里运行：

  ```
  python3 -m http.server 8765
  ```

  然后在浏览器里打开 http://127.0.0.1:8765/ 。
- 这是纯静态网页，不用编译。想放到网上，把整个文件夹传到任意静态托管就行，比如 GitHub Pages、Cloudflare Pages、Netlify。页面底部的署名请保留，这是 CC BY-SA 4.0 的要求。

## 制作方式

- **选词**：从 TOEIC® Service List 1.2 的 1,250 个词里，挑出 600 个能画成图的词。
- **例句和释义**：借助 AI 写成，再用脚本检查。每个例句里，只有目标词出自这份词表。
- **插画**：用 AI 图像模型照着一段写好的场景描述生成，每个词一幅。每一幅都由 AI 对照一份检查清单审核过：没有文字，没有标志，动作正确，手的数量正确。有 63 幅重新画过。前 235 幅的审核结论，维护者也确认过。
- **发音**：美音音标来自 CMU 发音词典；词典里没有合适读法的 73 个词，音标由 AI 另写。单词发音是合成语音，用语音识别检查过。
- **翻译**：用 AI 写成，还没有经过母语者审核。欢迎指正：[提交 issue](https://github.com/goodspeed2011/scenewords/issues)。

详细做法和还不完善的地方，见 [docs/pipeline.md](docs/pipeline.md) 和 [docs/quality.md](docs/quality.md)。

## 授权

| | |
| --- | --- |
| **内容** | 单词、例句、释义、场景描述、插画和发音：[CC BY-SA 4.0](CONTENT_LICENSE.md) |
| **代码** | [MIT](LICENSE) |
| **词表** | TOEIC® Service List 1.2（Charles Browne、Brent Culligan），CC BY-SA 4.0 |
| **插画和发音** | 由 AI 生成。只在我们拥有的权利范围内授权。 |
| **音标** | 大多源自 CMU 发音词典（BSD 授权） |

署名时请写：Scenewords by Dictation Trainer, CC BY-SA 4.0, https://github.com/goodspeed2011/scenewords

---

<sub>TOEIC 是 ETS 的注册商标。本项目未经 ETS 认可或批准。</sub>
