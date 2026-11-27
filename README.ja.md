[English](README.md) · [中文](README.zh.md) · [한국어](README.ko.md) · **日本語** · [Tiếng Việt](README.vi.md)

<p>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#dive_verb_01"><img src="media/thumb/dive_verb_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#bakery_noun_01"><img src="media/thumb/bakery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#colorful_adj_01"><img src="media/thumb/colorful_adj_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#warehouse_noun_01"><img src="media/thumb/warehouse_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#whale_noun_01"><img src="media/thumb/whale_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#chef_noun_01"><img src="media/thumb/chef_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#luggage_noun_01"><img src="media/thumb/luggage_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#elephant_noun_01"><img src="media/thumb/elephant_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#supervisor_noun_01"><img src="media/thumb/supervisor_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#pottery_noun_01"><img src="media/thumb/pottery_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#ice_cream_noun_01"><img src="media/thumb/ice_cream_noun_01.webp" width="128" alt=""></a>
<a href="https://scenewords.dictationtrainer.com/?lang=ja#violin_noun_01"><img src="media/thumb/violin_noun_01.webp" width="128" alt=""></a>
</p>

# Scenewords

仕事と日常でよく使う英単語 600 語。1語ごとに1枚の絵と、その絵を説明する1つの文があります。

単語リスト：TOEIC® Service List 1.2。Dictation Trainer が制作。

**600** 語 · イラスト **600** 枚 · 例文 **600** 文 · 全単語の米国式発音音声 · 意味（中文 · 한국어 · 日本語 · Tiếng Việt） · CC BY-SA 4.0

[絵の一覧](https://scenewords.dictationtrainer.com/?lang=ja) · [ダウンロード](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip) · [Hugging Face](https://huggingface.co/datasets/goodspeed2011/scenewords) · [Anki デッキ](https://github.com/goodspeed2011/scenewords/releases/latest) → **[dictationtrainer.com で書き取り練習](https://dictationtrainer.com/ja/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source)**

## サンプル

| 絵 | 単語 | 例文 | 単語カード |
| --- | --- | --- | --- |
| <img src="media/thumb/deadline_noun_01.webp" width="72" alt="The designer is working late to meet the deadline."> | **deadline** n.<br>/ˈdɛdˌlaɪn/<br>締め切り | The designer is working late to meet the **deadline**. | [開く](https://scenewords.dictationtrainer.com/?lang=ja#deadline_noun_01) |
| <img src="media/thumb/luggage_noun_01.webp" width="72" alt="A woman is pulling her luggage past a row of empty seats."> | **luggage** n.<br>/ˈlʌɡədʒ/<br>荷物、手荷物 | A woman is pulling her **luggage** past a row of empty seats. | [開く](https://scenewords.dictationtrainer.com/?lang=ja#luggage_noun_01) |
| <img src="media/thumb/sunscreen_noun_01.webp" width="72" alt="She is putting on sunscreen."> | **sunscreen** n.<br>/ˈsʌnˌskrin/<br>日焼け止め | She is putting on **sunscreen**. | [開く](https://scenewords.dictationtrainer.com/?lang=ja#sunscreen_noun_01) |

600 語すべてを[絵の閲覧ページ](https://scenewords.dictationtrainer.com/?lang=ja)で見られます。

## ここにあるもの、サイトにあるもの

<table>
<tr>
<td valign="top" width="50%">

**このリポジトリにあるもの**

- イラスト（768 px の WebP と 256 px のサムネイル）
- 単語、品詞、米国式発音記号、英語での意味、トピック
- 中国語・韓国語・日本語・ベトナム語の意味
- 各イラストの例文
- 全単語の米国式発音音声
- 各イラストのもとになった場面の説明

</td>
<td valign="top" width="50%">

**[dictationtrainer.com](https://dictationtrainer.com/ja/series/picture-words-600?utm_source=scenewords&utm_medium=readme&utm_campaign=open-source) にあるもの**

- 全例文の音声
- 例文の訳
- 単語単位の添削つきレッスン 40 本
- 間違いノートと復習
- 600 語・絵のウォール

</td>
</tr>
</table>

## ファイル構成

```
data/words.json          600 件、全フィールド
data/words.csv           同じ内容を 1 語 1 行で
data/topics.json         11 トピックと、その 5 言語の名前
media/img/               768 px の WebP、1 語 1 枚
media/thumb/             256 px の WebP
media/audio/word-us/     MP3、1 語 1 ファイル
docs/                    dataset.md · pipeline.md · quality.md
index.html, viewer/      絵の閲覧ページ
scripts/validate.mjs     フィールドとメディアを検証
PUBLIC_MANIFEST.json     全ファイルのサイズと SHA-256
```

全フィールドの説明は [docs/dataset.md](docs/dataset.md) にあります。ダウンロードしたファイルを検証するには、`node scripts/validate.mjs --hashes` を実行してください。

## 自分のパソコンで開く・自分で公開する

- [リポジトリをダウンロード](https://github.com/goodspeed2011/scenewords/archive/refs/heads/main.zip)して展開し、`index.html` をダブルクリックすると開けます。オフラインでも使えます。
- 任意の Web サーバーでフォルダーを開くこともできます。たとえばフォルダー内で次のコマンドを実行し、

  ```
  python3 -m http.server 8765
  ```

  ブラウザで http://127.0.0.1:8765/ を開いてください。
- ビルド不要の静的サイトです。自分のコピーを公開するには、フォルダーごと GitHub Pages、Cloudflare Pages、Netlify などの静的ホスティングにアップロードしてください。ページ下部のクレジット表記は残してください。CC BY-SA 4.0 の条件です。

## 制作方法

- **単語**：TOEIC® Service List 1.2 の 1,250 語から、絵で表せる 600 語を選びました。
- **例文と意味**：AI の助けを借りて書き、スクリプトでチェックしました。各例文に出てくるリストの単語は、見出し語の 1 語だけです。
- **イラスト**：AI の画像生成モデルを使い、文章で書いた場面をもとに、1 語につき 1 枚作りました。AI のレビュアーが 1 枚ずつ、チェックリストと照らし合わせて確認しました（文字がない、ロゴがない、動作が正しい、手の数が正しい）。63 枚は描き直しました。最初の 235 枚は、メンテナーもレビュー結果を確認しています。
- **発音**：米国式発音記号は CMU 発音辞書（CMU Pronouncing Dictionary）から作成しました。辞書に適切な形がない 73 語は、AI が発音記号を別に書きました。読み上げの合成音声は、音声認識でチェックしました。
- **翻訳**：AI を使って書いたもので、ネイティブスピーカーによるレビューはまだ受けていません。修正の提案を歓迎します。[Issue を作成](https://github.com/goodspeed2011/scenewords/issues)してください。

詳細と、まだ不完全な点は [docs/pipeline.md](docs/pipeline.md) と [docs/quality.md](docs/quality.md) にあります。

## ライセンス

| | |
| --- | --- |
| **コンテンツ** | 単語、例文、意味、場面の説明、イラスト、音声：[CC BY-SA 4.0](CONTENT_LICENSE.md) |
| **コード** | [MIT](LICENSE) |
| **単語リスト** | TOEIC® Service List 1.2（Charles Browne、Brent Culligan）、CC BY-SA 4.0 |
| **イラストと音声** | AI で生成したものです。当方が持つ権利の範囲内でのみライセンスされます。 |
| **発音記号** | 大部分は CMU 発音辞書（BSD ライセンス）をもとにした IPA |

クレジットを表記するときは、次のように書いてください：Scenewords by Dictation Trainer, CC BY-SA 4.0, https://github.com/goodspeed2011/scenewords

---

<sub>TOEIC は ETS の登録商標です。このプロジェクトは ETS による推奨・承認を受けたものではありません。</sub>
