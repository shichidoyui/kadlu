---
title: "資源一覧"
date: 2019-08-15T22:27:44+09:00
updateDate: 2019-08-15T22:27:44+09:00
categories: ["kadlu基本設計","kadlu"]
tags: [ "kadlu","Hugo" ]
hashtags: ["kadlu" ,"Hugo"]
url: "/post/kadlu-resource-list"
description:
cover: "/img/eyecatch/eyecatch001.jpg"
author:
toc: true
amp: true
dispDate: true
noIndex: false
draft: false
---

私作成のHugoテーマkadluの資源一覧です。

カスタムしたい部分を見つけるために、コードを読む時間を短縮できればと…

<!-- more -->

## 資源一覧

テーマ内のフォルダでタイトルを分けています

### root

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>ファイル名</th>
    <th>内容</th>
  </tr>
  <tr>
    <td>index.html(json)</td>
    <td>
      <span class="bold">概要</span><br>
      サイトトップのテンプレート<br>
      <span class="bold">主な機能</span><br>
      ・postフォルダ内の記事を一覧表示する<br>
      ・それ以外は特殊メッセージ<br>
      ・jsonは基本的なシングルページをリスト化して打ち出す
    </td>
  </tr>
  <tr>
    <td>404.html</td>
    <td>
      <span class="bold">概要</span><br>
      404のテンプレート<br>
      <span class="bold">主な機能</span><br>
      ・htaccessの設定でこのページへ来るようにしてください<br>
    </td>
  </tr>
</table>

### _default

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>ファイル名</th>
    <th>内容</th>
  </tr>
  <tr>
    <td>baseof.html</td>
    <td>
      <span class="bold">概要</span><br>
      すべてのテンプレートファイルの外枠<br>
      <span class="bold">主な機能</span><br>
      ・フラグでのAMP切り替え<br>
      ・AMPのインストール<br>
      ・タイトルの設定<br>
      ・共通headの取り込み<br>
      ・ヘッダーの取り込み<br>
      ・ヘッダーウィジェットの取り込み<br>
      ・2カラムサイトの段組<br>
      ・メインコンテンツの取り込み<br>
      ・サイドバーの取り込み<br>
      ・フッターウィジェットの取り込み<br>
      ・フッターの取り込み<br>
    </td>
  </tr>
  <tr>
    <td>single.html(json)</td>
    <td>
      <span class="bold">概要</span><br>
      シングルページのテンプレート<br>
      <span class="bold">主な機能</span><br>
      ・パンくずリスト<br>
      ・ソーシャルボタンの取り込み<br>
      ・記事内フラグによって日付の表示<br>
      ・記事内のパスからアイキャッチの表示<br>
      ・記事内フラグによって○○分で読めますの表示<br>
      ・記事内フラグによって目次の表示<br>
      ・目次下アドセンスの表示<br>
      ・記事の表示<br>
      ・タグの表示<br>
      ・post記事の場合「前の記事」「次の記事」を表示<br>
      ・(JSON)サブウィンドウへ記事を表示するために使用
    </td>
  </tr>

  <tr>
    <td>section.html</td>
    <td>
      <span class="bold">概要</span><br>
      セクションページのテンプレート<br>
      デフォルトのurlはcontentフォルダ以下に作ったフォルダ名<br>
      <span class="bold">主な機能</span><br>
      ・postフォルダ内の記事を一覧表示する<br>
      ・それ以外は特殊メッセージ<br>
    </td>
  </tr>

  <tr>
    <td>taxonomy.html</td>
    <td>
      <span class="bold">概要</span><br>
      カテゴリ、タグでの記事一覧表示<br>
      <span class="bold">主な機能</span><br>
      ・postフォルダ内の記事を一覧表示する<br>
      ・それ以外は特殊メッセージ<br>
    </td>
  </tr>
  <tr>
    <td>summary.html</td>
    <td>
      <span class="bold">概要</span><br>
      記事一覧ループ時の表示<br>
      <span class="bold">主な機能</span><br>
      ・記事内のパスからアイキャッチの表示<br>
      ・記事タイトルを表示<br>
      ・記事内にdescriptionがあれば表示(スマホ非表示)<br>
      ・記事内にdescriptionがなければsummaryを作成表示(スマホ非表示)<br>
      ・記事内フラグによって日付の表示<br>
      ・記事内フラグによって○○分で読めますの表示<br>
    </td>
  </tr>
  <tr>
    <td>terms.html</td>
    <td>
      <span class="bold">概要</span><br>
      カテゴリ一覧、タグ一覧の表示<br>
      <span class="bold">主な機能</span><br>
      ・タイトルによりカテゴリ一覧またはタグ一覧を出す<br>
      ・カテゴリ一覧は記事数も表示する<br>
    </td>
  </tr>
</table>

### search

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>ファイル名</th>
    <th>内容</th>
  </tr>
  <tr>
  <tr>
    <td>section.html</td>
    <td>
      <span class="bold">概要</span><br>
      検索ページのテンプレート<br>
      <span class="bold">主な機能</span><br>
      ・URLパラメータからも検索できる(キーはq)<br>
      ・jsでindex.jsonを検索して表示する<br>
      ・専用mdはsearch/index.md<br>
    </td>
  </tr>
</table>

### partials

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>ファイル名</th>
    <th>内容</th>
  </tr>
  <tr>
    <td>head.html</td>
    <td>
      <span class="bold">概要</span><br>
      headを切り出したもの<br>
      <span class="bold">主な機能</span><br>
      ・ogpの設定。主にtwitter<br>
      ・canonicalの設定、サイトマップの設定<br>
      ・ビューポートとかレンダリングの設定<br>
      ・記事内フラグによってindex。noindexの切り替え<br>
      ・configから各WEBマスターツールの登録<br>
      ・configからファビコン・タッチアイコンの設定<br>
      ・構造化マークアップ<br>
      ・font-awesome4.7のインストール<br>
      ・bulmaのインストール<br>
      ・kadluオリジナルCSSのインストール<br>
    </td>
  </tr>
  <tr>
    <td>header.html</td>
    <td>
      <span class="bold">概要</span><br>
      ヘッダー<br>
      <span class="bold">主な機能</span><br>
      ・ヒーローデザインの表示<br>
      ・configで設定した画像の表示<br>
      ・configでメインメニューがあれば表示<br>
      ・ハンバーガーメニュー<br>
      ・グロナビ用モーダルの表示<br>
      ・configで設定したサイトタイトルの表示<br>
      ・configで設定したサイトディスクリプションの表示<br>
    </td>
  </tr>
  <tr>
    <td>header-widget.html</td>
    <td>
      <span class="bold">概要</span><br>
      ヘッダーウィジェット<br>
      <span class="bold">主な機能</span><br>
      ・ヘッダー下、記事上に表示<br>
      ・好きにカスタマイズしてください<br>
      ・デフォルトでは空白です。<br>
    </td>
  </tr>
  <tr>
    <td>sidebar.html</td>
    <td>
      <span class="bold">概要</span><br>
      サイイドバー<br>
      <span class="bold">主な機能</span><br>
      ・configでアドセンスを登録していると広告表示<br>
      ・configでサブメニューを登録していれば表示<br>
      ・ライター情報を表示<br>
      ・configのライター名を表示<br>
      ・configのプロフィール画像があれば表示<br>
      ・configのメールアドレスがあれば表示<br>
      ・configの各SNS設定があれば表示<br>
      ・カテゴリ一覧と記事数を表示<br>
      ・目次を表示(追尾・スマホ非表示)<br>
      ・シェアボタンを表示<br>
    </td>
  </tr>
  <tr>
    <td>social.html</td>
    <td>
      <span class="bold">概要</span><br>
      ソーシャルボタン<br>
      <span class="bold">主な機能</span><br>
      ・twitter<br>
      ・facebook<br>
      ・はてな<br>
      ・pocket<br>
    </td>
  </tr>
  <tr>
    <td>adsense.html</td>
    <td>
      <span class="bold">概要</span><br>
      グーグルアドセンス<br>
      <span class="bold">主な機能</span><br>
      ・コンフィグファイルで各パラメータを設定<br>
    </td>
  </tr>
  <tr>
    <td>footer.html</td>
    <td>
      <span class="bold">概要</span><br>
      フッターパーツ<br>
      <span class="bold">主な機能</span><br>
      ・上部へ戻るボタン<br>
      ・フッターメニューがあれば表示<br>
      ・configに自動広告の設定があれば使用<br>
      ・GTM設定があれば使用<br>
    </td>
  </tr>
  <tr>
    <td>footer-widget.html</td>
    <td>
      <span class="bold">概要</span><br>
      フッターウィジェット<br>
      <span class="bold">主な機能</span><br>
      ・記事下、フッター上に表示<br>
      ・好きにカスタマイズしてほしい<br>
      ・デフォルトではpostの場合、アドセンスの関連コンテンツとHugoの関連コンテンツを表示する<br>
    </td>
  </tr>
</table>

### shortcodes

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>ファイル名</th>
    <th>内容</th>
  </tr>
  <tr>
    <td>a.html</td>
    <td>
      <span class="bold">概要</span><br>
      内部リンク用のショートコード<br>
      <span class="bold">主な機能</span><br>
      ・リンク先からタイトルとdescriptionを取得して表示する<br>
    </td>
  </tr>
  <tr>
    <td>ads.html</td>
    <td>
      <span class="bold">概要</span><br>
      広告用ショートコード<br>
      <span class="bold">主な機能</span><br>
      ・configの設定値を利用してアドセンスを表示する<br>
    </td>
  </tr>
  <tr>
    <td>amp-img.html</td>
    <td>
      <span class="bold">概要</span><br>
      画像表示用のショートコード<br>
      <span class="bold">主な機能</span><br>
      ・amp-imgを表示する<br>
      ・lightboxを装備<br>
    </td>
  </tr>
  <tr>
    <td>balloon.html</td>
    <td>
      <span class="bold">概要</span><br>
      吹き出し用のショートコード<br>
      <span class="bold">主な機能</span><br>
      ・吹き出しを表示する<br>
      ・デフォルトのアイコンはconfigのプロフィール用画像<br>
      ・パスの指定で画像の出し分けが可能<br>
    </td>
  </tr>
  <tr>
    <td>pochette.html</td>
    <td>
      <span class="bold">概要</span><br>
      サブウィンドウ起動用のショートコード<br>
      <span class="bold">主な機能</span><br>
      ・サブウィンドウ起動用のボタンを表示する<br>
      ・ショートコードで挟むことにより様々なコンテンツをサブウィンドウ化できる
    </td>
  </tr>
</table>

### CSS

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <td>stylesheet-custom.css</td>
    <td>
      <span class="bold">概要</span><br>
      好きに使ってほしいスタイルシート<br>
      <span class="bold">主な機能</span><br>
      ・好きに使って上書きしてください<br>
      ・子テーマ的に使うと良いです。
    </td>
  </tr>
  <tr>
    <td>stylesheet-kadlu-common.css</td>
    <td>
      <span class="bold">概要</span><br>
      kadluのコモンスタイル<br>
      <span class="bold">主な機能</span><br>
      ・スティッキー<br>
      ・SNSボタン<br>
      ・インラインスタイル<br>
      ・サブウィンドウのスタイル<br>
      ・そんなにいじることは無いのでmin化
    </td>
  </tr>
  <tr>
    <td>stylesheet-kadlu-custom.css</td>
    <td>
      <span class="bold">概要</span><br>
      kadluのカスタムスタイル<br>
      <span class="bold">主な機能</span><br>
      タイトルデザインなど<br>
      <span class="bold">これを削除すると、基本的な装飾がすべてリセットされます</span><br>
      カスタムしたい方向けに切り出し<br>
      SCCSも用意しているので、色の変数などを変えてお使いください
    </td>
  </tr>
  <tr>
    <td>stylesheet-kadlu-custom.css</td>
    <td>
      <span class="bold">概要</span><br>
      ライトボックスのスタイル<br>
      <span class="bold">主な機能</span><br>
      ライトボックス表示<br>
      <span class="bold">多分消します。</span>
    </td>
  </tr>
</table>

### JS

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <td>kadlu-common.js</td>
    <td>
      <span class="bold">概要</span><br>
      kadluのコモンJS<br>
      <span class="bold">主な機能</span><br>
      ・共通部分へのイベント追加<br>
      ・サブウィンドウシステム
    </td>
  </tr>
  <tr>
    <td>kadlu-search.js</td>
    <td>
      <span class="bold">概要</span><br>
      kadluの検索用JS<br>
      <span class="bold">主な機能</span><br>
      ・indexのリストから有効文字列を検索する<br>
      ・パラーメータ(?q=○○)で渡ってきた場合も使用可能
    </td>
  </tr>
  <tr>
    <td>lightbox.min.js</td>
    <td>
      <span class="bold">概要</span><br>
      ライトボックスのJS<br>
      <span class="bold">主な機能</span><br>
      ・ライトボックスを有効にする<br>
      ・多分切ります。なるべくカスタムしないでください
    </td>
  </tr>
</table>

## CDN

サーバーに負担を掛けないようになるべくCDNを使っています。

基本的にJQuery系の技術に統一しています。

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <td>bulma.css</td>
    <td>
      <span class="bold">概要</span><br>
      bulmaのCSS<br>
      <span class="bold">主な機能</span><br>
      ・基本の枠組みCSS
    </td>
  </tr>
  <tr>
    <td>jQuery.js</td>
    <td>
      <span class="bold">概要</span><br>
      jQuery<br>
      <span class="bold">主な機能</span><br>
      ・ただのJQuery<br>
      ・JSは基本JQueryで書いています。
    </td>
  </tr>
  <tr>
    <td>jQuery.lazyload.js</td>
    <td>
      <span class="bold">概要</span><br>
      画像の遅延ドードJS<br>
      <span class="bold">主な機能</span><br>
      ・ショートコード(画像・内部リンク)を遅延ロード<br>
      ・一覧ページでの画像を遅延ロード<br>
      ・識別クラスは「class="lazy"」
    </td>
  </tr>
  <tr>
    <td>jQuery.UI.js(css)</td>
    <td>
      <span class="bold">概要</span><br>
      サブウィンドウリサイズ用JS<br>
      <span class="bold">主な機能</span><br>
      ・PC表示時のサブウィンドウドラッグ、リサイズ
    </td>
  </tr>
  <tr>
    <td>barba2.js</td>
    <td>
      <span class="bold">概要</span><br>
      Pjax用JS<br>
      <span class="bold">主な機能</span><br>
      ・PjaxはjQueryより使いやすいのでこちらを採用
    </td>
  </tr>
  <tr>
    <td>fontAwesome.js</td>
    <td>
      <span class="bold">概要</span><br>
      アイコン用JS<br>
      <span class="bold">主な機能</span><br>
      ・ところどころにあるアイコンフォント
    </td>
  </tr>
  <tr>
    <td>prettify.js</td>
    <td>
      <span class="bold">概要</span><br>
      コードのシンタックスハイライト用JS<br>
      <span class="bold">主な機能</span><br>
      ・コードが有る画面に雑に色付できる
    </td>
  </tr>
</table>
