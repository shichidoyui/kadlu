---
title: "ページパラメータ一覧"
date: 2019-08-15T22:27:44+09:00
updateDate: 2019-08-27T22:27:44+09:00
categories: ["kadlu基本設計","kadlu"]
tags: [ "kadlu","Hugo" ]
url: "/post/kadlu-page-param"
description: 
cover: "/img/eyecatch/eyecatch001.jpg"
author: 
toc: true
amp: true
readingTime: false
dispDate: true
noIndex: false
draft: false
---

私作成のHugoテーマkadluの画面変数一覧です。

アフィリエイターや手軽にサイト管理したいWEBマスタの需要は満たしているかと…

<!-- more -->

## 画面変数一覧

Hugoのパラメータは一部除いています。

個人的に大切だと思う部分を中心に書いていきます。


<div class="columns">
  <div class="column">
   <pre class="prettyprint linenums">
---
title: "【kadlu】ページパラメータ一覧"
date: 2019-08-15T22:27:44+09:00
updateDate: 2019-08-27T22:27:44+09:00
categories: ["kadlu基本設計","kadlu"]
tags: [ "kadlu" ]
url: "/post/kadlu-page-param"
description: 
cover: "/img/common/eyecatch001.jpg"
author: 
toc: true
readingTime: true
dispDate: true
noIndex: false
draft: false
---
</pre>
  </div>
  <div class="column">
    {{<img src="/img/post/kadlu-page-param/kadlu-page-param01.jpg" width="9" height="16" layout="responsive" alt="画面内変数の挙動">}}
  </div>
</div>

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>パラメータ</th>
    <th>備考</th>
  </tr>
  <tr>
    <td><span class="bold red">title</span></td>
    <td>②タイトル。<span class="bold red">必須。</span></td>
  </tr>
  <tr>
    <td><span class="bold red">date</span></td>
    <td>④公開日時。今日より前に書かれた記事が公開される。<span class="bold red">必須。</span></td>
  </tr>
  <tr>
    <td>updateDate</td>
    <td>③更新日時。あると便利かなって。自作。</td>
  </tr>
  <tr>
    <td><span class="bold blue">categories</span></td>
    <td>①カテゴリ。<br>Javascriptの配列のように書いて複数指定できる。<br>これだけでカテゴリページが自動作成される。<br>厳密には違うが<span class="bold blue">Hugo用意しているパラメータ</span>(オプションパラメータという)</td>
  </tr>
  <tr>
    <td><span class="bold blue">tags</span></td>
    <td>⑨タグ。<br>Javascriptの配列のように書いて複数指定できる。<br>これだけでタグページが自動作成される。<br>厳密には違うが<span class="bold blue">Hugo用意しているパラメータ</span>(オプションパラメータという)</td>
  </tr>
  <tr>
    <td><span class="bold blue">url</span></td>
    <td>URL<br>この文字列でフォルダを指定してURLを変更できる<br>特にこだわりが無ければ未設定でデフォルトのパーマリンクとする<br>厳密には違うが<span class="bold blue">Hugo用意しているパラメータ</span>(オプションパラメータという)</td>
  </tr>
  <tr>
    <td><span class="bold blue">description</span></td>
    <td>ディスクリプション。<br><span class="bold blue">Hugo用意しているパラメータ</span>(オプションパラメータという)。<br>私のテーマ内では、設定してなければHugoが勝手に作るサマリーからとる。</td>
  </tr>
  <tr>
    <td>cover</td>
    <td>⑥アイキャッチ。<br>画像のパスからアイキャッチ画像をだす。<span class="bold red">推奨画像サイズは1200×675</span>自作。</td>
  </tr>
  <tr>
    <td>author</td>
    <td>筆者情報。あると便利かなって。自作。</td>
  </tr>
  <tr>
    <td>toc</td>
    <td>⑧目次フラグ。false(空白未設定)なら目次なし。あると便利かなって。自作。</td>
  </tr>
  <tr>
    <td>readinTime</td>
    <td>⑦○分で読めますフラグ。<br>false(空白未設定)なら表示なし自作。</td>
  </tr>
  <tr>
    <td>dispDate</td>
    <td>⑤日付表示フラグ。false(空白未設定)なら更新日表示なし。自己紹介や検索ページ用自作。</td>
  </tr>
  <tr>
    <td>noIndex</td>
    <td>noIndexフラグ。trueならnoindexにして検索されないようにする。質の低いページ用。自作。</td>
  </tr>
  <tr>
    <td><span class="bold blue">draft<span></td>
    <td>下書きフラグ。trueなら下書き状態にする。<span class="bold blue">Hugo用意しているパラメータ</span>(オプションパラメータという)。</td>
  </tr>
</table>

