---
title: "configパラメータ一覧"
date: 2019-08-15T22:27:44+09:00
updateDate: 2019-08-27T22:27:44+09:00
categories: ["kadlu基本設計","kadlu"]
tags: [ "kadlu","Hugo" ]
hashtags: ["kadlu" ,"Hugo"]
url: "/posts/kadlu-config-param"
description: 
cover: "/img/eyecatch/eyecatch001.jpg"
author: 
toc: true
readingTime: false
dispDate: true
noIndex: false
draft: false
---

私作成のHugoテーマconfigの画面変数一覧です。

アフィリエイターや手軽にサイト管理したいWEBマスタの需要は見てしているかと…

<!-- more -->

## コンフィグ変数一覧

Hugoのパラメータは一部除いています。

フロント技術で流用が効くようにjsonで書いています。

toml・yamlへはツールなどで移行していただければ…

サンプル

<pre class="prettyprint linenums">
{
  "baseURL": "http://example.org/",
  "languageCode": "ja",
  "title": "Hugoで作るアフィリエイトサイト",
  "theme": "kadlu",
  "hasCJKLanguage": true,
  "taxonomies": {
    "tag": "tags",
    "category": "categories"
  },
  "permalinks": {
    "post": "/:section/:filename/"
  },
  "googleAnalytics": "'UA-xxxxxxxx-x",
  "outputs": {
    "home": [
      "HTML",
      "JSON",
      "RSS"
    ],
    "page": [
      "HTML",
      "JSON"
    ],
    "section": [
      "HTML",
      "JSON"
    ],
    "taxonomyTerm": [
      "HTML",
      "JSON"
    ],
    "taxonomy": [
      "HTML",
      "JSON"
    ]
  },
  "params": {
    "author": "岸波白野",
    "logo": "/img/logo.jpg",
    "favicon": "/img/common/favicon.ico",
    "description": "静的ジェネレーターで低コストアフィサイトを作る",
    "paginate": 10,
    "mainImage": "/img/common/main-img.jpg",
    "adsensePublisher": "ca-pub-xxxxxxxxxxxxxxxx",
    "adsenseSlot": "xxxxxxxxxx",
    "adsenseSlotRelation": "xxxxxxxxxx",
    "adsenseAutoAds": true,
    "googleSiteVerification": "google_site_verification_code",
    "msValidate": "bing_site_verification_code",
    "email": "name@domain.com",
    "github": "kishinami",
    "twitter": "kishinami",
    "instagram": "kishinami",
    "profileImg": "/img/common/icon.png",
    "profileDescription": "自己紹介文htmlタグで装飾もできます",
  },
  "menu": {
    "main": [
      {
        "name": "検索",
        "weight": 1,
        "url": "/search/"
      },
      {
        "name": "ホーム",
        "weight": 2,
        "url": "/"
      }
    ],
    "footer": [
      {
        "name": "免責事項",
        "weight": 1,
        "url": "/pages/disclaimer/"
      },
      {
        "name": "お問い合わせ",
        "weight": 2,
        "url": "/pages/contact/"
      }
    ],
    "sub": [
      {
        "identifier": "sub4",
        "name": "静的ジェネレーターについて",
        "weight": 1
      },
      {
        "parent": "sub4",
        "name": "静的ジェネレーターとは？",
        "url": "",
        "weight": 1
      },
      {
        "parent": "sub4",
        "name": "メリット・デメリットは？",
        "url": "/post/static-site-generator-affiliate/",
        "weight": 2
      },
      {
        "identifier": "sub1",
        "name": "Hugo用テーマkadluについて",
        "weight": 2
      },
      {
        "parent": "sub1",
        "name": "アピールポイント",
        "url": "/post/kadlu-about/",
        "weight": 1
      },
      {
        "parent": "sub1",
        "name": "デザイン詳細",
        "url": "/post/kadlu-decoration-tag/",
        "weight": 2
      }
    ]
  }
}
</pre>

<table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <tr>
    <th>パラメータ</th>
    <th>備考</th>
  </tr>
  <tr>
    <td><span class="bold red">baseURL</span></td>
    <td>ベースURL。サイトのルートドメインを記載します<span class="bold red">必須。</span></td>
  </tr>
  <tr>
    <td><span class="bold red">languageCode</span></td>
    <td>Hugo日本語対応していないけどね...HTMLのmetaに使っているので「ja」にしておいてください<span class="bold red">必須。</span></td>
  </tr>
  <tr>
    <td><span class="bold red">title</span></td>
    <td>サイトタイトル。ブランド名検索される領域まで行きたいです。</td>
  </tr>
  <tr>
    <td><span class="bold red">theme</span></td>
    <td>使用テーマ<br>テーマのフォルダ名を記載します。</td>
  </tr>
  <tr>
    <td><span class="bold red">hasCJKLanguage</span></td>
    <td>中国日本韓国語フラグ<br>サマリーの文字数取得などに使います。</td>
  </tr>
  <tr>
    <td><span class="bold blue">taxonomies</span></td>
    <td>タクソノミー<br>カテゴリとタグを使用可能にするのが無難かと…</td>
  </tr>
  <tr>
    <td>googleAnalytics</td>
    <td>Googleアナリティクス設定<br>トラッキングコードを入れておくと、サイト解析ができます。実はHugoのデフォルト機能</td>
  </tr>
  <tr>
    <td>outputs</td>
    <td>出力形式設定<br>システム的にはpageのJSONのみ仕様しています。ほかは好み。</td>
  </tr>
  <tr>
    <td>author</td>
    <td>著者情報<br>メタタグと構造化マークアップ、サイドバーの</td>
  </tr>
  <tr>
    <td>logo</td>
    <td>logo<br>タッチアイコン、ホーム画面のogpなんかにも使用。画面上には出して無いです。</td>
  </tr>
  <tr>
    <td>favicon</td>
    <td>ファビコン<br>最近の検索結果ではファビコンが出ちゃうので、必須にしたい。</td>
  </tr>
  <tr>
    <td>paginate</td>
    <td>ページネーション<br>indexやカテゴリページで記事一覧をどこまで出すか。10くらいが適当かなって。</td>
  </tr>
  <tr>
    <td>mainImage</td>
    <td>メインイメージ<br>ヒーローデザインの部分。正方形の画像を適当にトリミングしているので、サイトロゴ付きを出す場合は工夫が必要です。<span class="bold red">推奨サイズは1200×1200</span></td>
  </tr>
  <tr>
    <td>adsensePublisher</td>
    <td>アドセンスパブリッシャー<br>GoogleAdsenseのアカウントを入れます。広告を出すなら必須</td>
  </tr>
  <tr>
    <td>adsenseSlot</td>
    <td>GoogleAdsense広告ID<br>レスポンシブで作成した広告のIDを入れてください。adsenseSlotとadsensePublisherがあると広告が表示されます。</td>
  </tr>
  <tr>
    <td>adsenseSlotRelation</td>
    <td>GoogleAdsense広告ID<br>こちらは関連コンテンツ広告用です。関連コンテンツ広告で作成した</td>
  </tr>
  <tr>
    <td>adsenseAutoAds</td>
    <td>GoogleAdsense自動広告フラグ<br>trueの場合、自動広告がONになります。落ち着くまで時間がかかりますが、推奨です。</td>
  </tr>
  <tr>
    <td>googleSiteVerification</td>
    <td>GoogleWEBマスター所有コード<br>GoooglのWEBマスターツールに登録したときに発行されるコードを登録するconfigです</td>
  </tr>
  <tr>
    <td>bing_site_verification_code</td>
    <td>BingWEBマスター所有コード<br>BingのWEBマスターツールに登録したときに発行されるコードを登録するconfigです</td>
  </tr>
  <tr>
    <td>email</td>
    <td>メールアドレス<br>ただプロフォール欄に表示するだけに使っています。窓口はGoogleフォームのほうがおすすめです。</td>
  </tr>
  <tr>
    <td>github</td>
    <td>githubのID<br>githubのIDを登録しておくと、プロフィール欄のボタンから遷移できるようになります。</td>
  </tr>
  <tr>
    <td>twitter</td>
    <td>twitterのID<br>twitterのIDを登録しておくと、OGPのサイト所有者、ツイート後にフォローを促す機能、プロフィール欄のtwitterボタンが使えるようになります。</td>
  </tr>
  <tr>
    <td>instagram</td>
    <td>instagramのID<br>instagramのIDを登録しておくと、プロフィール欄のinstagramボタンが使えるようになります。</td>
  </tr>
  <tr>
    <td>profileImg</td>
    <td>プロフイール画像<br>登録しておくと、プロフィール欄の画像と、吹き出しのデフォルト画像になります。</td>
  </tr>
  <tr>
    <td>profileDescription</td>
    <td>プロフイール説明<br>登録しておくと、プロフィール欄の説明が表示されます。</td>
  </tr>
  <tr>
    <td>menu.main</td>
    <td>メインメニュー<br>登録しておくと、グロナビが出ます</td>
  </tr>
  <tr>
    <td>menu.footer</td>
    <td>フッターメニュー<br>登録しておくと、フッターメニューが出ます</td>
  </tr>
  <tr>
    <td>menu.sub</td>
    <td>サブメニュー<br>登録しておくと、サイドバーのサブメニューが出ます</td>
  </tr>
</table>