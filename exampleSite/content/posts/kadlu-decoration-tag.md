---
title: "装飾ダグ一覧"
date: 2019-08-15T22:27:44+09:00
updateDate: 2019-08-15T22:27:44+09:00
categories: ["静的ジェネレーター","kadlu"]
tags: [ "kadlu" ,"bulma"]
hashtags: ["kadlu" ,"bulma"]
url: "/post/kadlu-decoration-tag"
description:
cover: "/img/eyecatch/eyecatch001.jpg"
author:
toc: true
amp: true
dispDate: true
noIndex: false
draft: false
---

Hugoテーマkadluの装飾用クラスを紹介します。

<!-- more -->

クラス指定でなんとかなる部分が多いのではないかと…

## kadluの独自スタイル

独自CSSに記載したスタイルです。

### インライン

<span class="bold">太字</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;bold&quot;&gt;太字&lt;/span&gt;
</pre>
</div>

<span class="red">赤字</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;red&quot;&gt;赤字&lt;/span&gt;
</pre>
</div>

<span class="bold red">太赤字</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;bold red&quot;&gt;太赤字&lt;/span&gt;
</pre>
</div>

<span class="red-under">赤アンダーライン</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;red-under&quot;&gt;赤アンダーライン&lt;/span&gt;
</pre>
</div>

<span class="blue">青</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;blue&quot;&gt;青&lt;/span&gt;
</pre>
</div>

<span class="bold blue">青太字</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;bold blue&quot;&gt;青太字&lt;/span&gt;
</pre>
</div>

<span class="green">緑</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;green&quot;&gt;緑&lt;/span&gt;
</pre>
</div>

<span class="bold green">緑太字</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;bold green&quot;&gt;緑太字&lt;/span&gt;
</pre>
</div>

<span class="strike">打消し線</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;strike&quot;&gt;打消し線&lt;/span&gt;
</pre>
</div>

<span class="keyboard-key">キーボードキー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;keyboard-key&quot;&gt;キーボードキー&lt;/span&gt;
</pre>
</div>

### マーカー

<span class="marker">黄色マーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker&quot;&gt;黄色マーカー&lt;/span&gt;
</pre>
</div>

<span class="marker-red">赤色マーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker-red&quot;&gt;赤色マーカー&lt;/span&gt;
</pre>
</div>

<span class="marker-blue">青色マーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker-blue&quot;&gt;青色マーカー&lt;/span&gt;
</pre>
</div>

<span class="marker-under">黄色アンダーラインマーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker-under&quot;&gt;黄色アンダーラインマーカー&lt;/span&gt;
</pre>
</div>

<span class="marker-under-red">赤色アンダーラインマーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker-under-red&quot;&gt;赤色アンダーラインマーカー&lt;/span&gt;
</pre>
</div>

<span class="marker-under-blue">青色アンダーラインマーカー</span>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;span class=&quot;marker-under-blue&quot;&gt;青色アンダーラインマーカー&lt;/span&gt;
</pre>
</div>

### 画像

ショートコードで対応できます。

SEO的に画像検索に出したい図や、下記カルーセル用の画像を用意したいときに使用してください。

クリック後は別タグで表示されます。

<div class="columns">
<div class="column is-6">
{{<img src="/img/post/kadlu-decoration-tag/kadlu-decoration-tag01.jpg" alt="画像挿入について">}}
</div>
<div class="column is-6">
<div class="sourceview">
<pre class="prettyprint linenums">
{{&lt;img src=&quot;/img/post/kadlu-decoration-tag/kadlu-decoration-tag01.jpg&quot; alt=&quot;画像挿入について&quot;&gt;}}
{{&lt;img lazy=&quot;false&quot; src=&quot;/img/post/kadlu-decoration-tag/kadlu-decoration-tag01.jpg&quot; alt=&quot;画像挿入について&quot;&gt;}}

</pre>
</div>
</div>
</div>

### ブログカード

内部リンクだけですが、bulmaのショートコードで対応できます。

<div class="sourceview">
<pre class="prettyprint linenums">
{{&lt;a href=&quot;/posts/kadlu-config-param&quot;&gt;}}
</pre>
</div>

{{<a href="/posts/kadlu-config-param">}}

(ベースのURL以下をhref属性に入れることで、ローカル環境、デプロイ後環境のどちらにも対応できます。)

### 吹き出し(balloon)

{{< balloon src="/img/common/logo.jpg" value="吹き出しです！画像とセリフを指定するとできます。">}}

{{< balloon  value="逆からです！「right=&quot;true&quot;」を記載すると右からになります。" right="true" >}}

{{< balloon  "WordPressのショートカットのように記載することもできます。(置換が楽だからね)" >}}

<div class="sourceview">
<pre class="prettyprint linenums">
{{&lt; balloon src=&quot;/img/common/faceicon.png&quot; value=&quot;吹き出しです！画像とセリフを指定するとできます。&quot;&gt;}}

{{&lt; balloon  value=&quot;逆からです！「right=&quot;true&quot;」を記載すると右からになります。&quot; right=&quot;true&quot; &gt;}}

{{&lt; balloon  &quot;WordPressのショートカットのように記載することもできます。(置換が楽だからね)&quot; &gt;}}

</pre>
</div>

画像が未指定の場合は、プロフィールのアイコンから持ってきます。

### カード

Blumaのメッセージスタイルを呼び出せるショートコードです。

属性一覧

<table class="table">
<tr>
<th>title</th>
<td>タイトル部分を表示します</td>
</tr>
<tr>
<th>class</th>
<td>クラスが指定できます</td>
</tr>
</table>

{{<card title="カード">}}
ショートコード内はmarkDown形式で表示できます
{{</card>}}

<div class="sourceview">
<pre class="prettyprint linenums">
{{&lt;card title=&quot;カード&quot;&gt;}}
ショートコード内はmarkDown形式で表示できます
{{&lt;/card&gt;}}
</pre>
</div>

### アフィリエイト

商品画像表示、アフィリエイトリンクのボタンが表示できるタグです。

アドセンスにクリックイベントを送る仕組みがあり、かんたんなイベント管理ができます。

属性一覧

<table class="table">
<tr>
<th>title</th>
<td>タイトル部分を表示します</td>
</tr>
<tr>
<th>comment</th>
<td>コメントが指定できます</td>
</tr>
<tr>
<th>amazon</th>
<td>リンクを指定することでamazonボタンが表示されます</td>
</tr>
<tr>
<th>rakuten</th>
<td>リンクを指定することで楽天ボタンが表示されます</td>
</tr>
<tr>
<th>yahoo</th>
<td>リンクを指定することでyahooボタンが表示されます</td>
</tr>
<tr>
<th>official</th>
<td>リンクを指定することで公式ボタンが表示されます</td>
</tr>
</table>

{{<afi title="商品タイトル" comment="コメントが入ります" amazon="amazon" rakuten="Rakuten" >}}

画像とか
{{</afi>}}

<div class="sourceview">
<pre class="prettyprint linenums">
{{&lt;afi title=&quot;商品タイトル&quot; comment=&quot;コメントが入ります&quot; amazon=&quot;amazon&quot; rakuten=&quot;Rakuten&quot; &gt;}}

画像とか
{{&lt;/afi&gt;}}
</pre>
</div>

## Bulma引き継ぎ装飾

CSSフレームワークBulmaをベースとしているので、こんなこともできます。

BulmaのSCSSを調整・コンパイルし、Bulma導入部分に取り込めば、色も自由に変更できますよ。

### font-awesomeを使ったアイコン

Bulmaはfont-awesomeをきれいに見せることにも対応しています。

(kadluはfont-awesomeもインポートしています。)

classをいじることで、色々と表示ができますよ！

<i class="fas fa-info-circle"></i>

<div class="sourceview">
  <pre class="prettyprint linenums">
&lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
</pre>
</div>

<div class="columns">
  <div class="column">
    <span class="icon has-text-info">
      <i class="fas fa-info-circle"></i>
    </span>
    <span class="icon has-text-success">
      <i class="fas fa-check-square"></i>
    </span>
    <span class="icon has-text-warning">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
    <span class="icon has-text-danger">
      <i class="fas fa-ban"></i>
    </span>
  </div>

  <div class="column sourceview">
    <pre class="prettyprint linenums">
&lt;span class=&quot;icon has-text-info&quot;&gt;
  &lt;i class=&quot;fas fa-info-circle&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class=&quot;icon has-text-success&quot;&gt;
  &lt;i class=&quot;fas fa-check-square&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class=&quot;icon has-text-warning&quot;&gt;
  &lt;i class=&quot;fas fa-exclamation-triangle&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;span class=&quot;icon has-text-danger&quot;&gt;
  &lt;i class=&quot;fas fa-ban&quot;&gt;&lt;/i&gt;
&lt;/span&gt;
</pre>
  </div>
</div>

### カラムスタイル

<div class="columns">
  <div class="column has-background-primary">カラム1</div>
  <div class="column has-background-info">カラム2</div>
</div>

<div class="sourceview">
<pre class="prettyprint linenums">
&lt;div class=&quot;columns&quot;&gt;
  &lt;div class=&quot;column has-background-primary&quot;&gt;カラム1&lt;/div&gt;
  &lt;div class=&quot;column has-background-info&quot;&gt;カラム2&lt;/div&gt;
&lt;/div&gt;
</pre>
</div>

もちろん3カラムもできます。

<code>is-mobile</code>のクラスをつければ、スマホサイズでも、横並びのカラムを維持できます。

詳しくはBulma公式サイトで！



### ボックススタイル

ボックス系はbulmaをそのまま継承しています。

なかなかかっこよい。
<div class="columns">
  <div class="column is-6">
    <div class="message is-dark">
      <div class="message-header">Dark</div>
      <div class="message-body">
        ダーク色です。BulmaのSCSSをいじることで色変えもできます
      </div>
    </div>
    <div class="message is-primary">
      <div class="message-header">Primary</div>
      <div class="message-body">
        プライマリー色
      </div>
    </div>
    <div class="message is-link">
      <div class="message-header">Link</div>
      <div class="message-body">
        リンク色、デメリット紹介のときとかに使うときが多いかなって
      </div>
    </div>
    <div class="message is-info">
      <div class="message-header">Info</div>
      <div class="message-body">
        <p>気づいていらっしゃると思いますが、</p>
        <p>messageのクラスにis-〇〇ってつけるだけで色が変わります。</p>
      </div>
    </div>
    <div class="message is-success">
      <div class="message-header">Success</div>
      <div class="message-body">
        message-headerをつけることで、「Success」の帯ができます。
      </div>
    </div>
    <div class="message is-warning">
      <div class="message-header">Warning</div>
      <div class="message-body">
        Warningは文字色が黒になります。メイド比「4.5:1」ってやつですね！
      </div>
    </div>
    <div class="message is-danger">
      <div class="message-header">Danger</div>
      <div class="message-body">
        よくメリットの紹介で使っている色は危険色だったりします。
      </div>
    </div>
  </div>

  <div class="column is-6 sourceview">
    <pre class="prettyprint linenums">
&lt;div class=&quot;message is-dark&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Dark&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    ダーク色です。BulmaのSCSSをいじることで色変えもできます
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-primary&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Primary&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    プライマリー色
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-link&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Link&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    リンク色、デメリット紹介のときとかに使うときが多いかなって
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-info&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Info&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
   気づいていらっしゃると思いますが、messageのクラスにis-〇〇ってつけるだけで色が変わります。
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-success&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Success&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
   message-headerをつけることで、「Success」の帯ができます。
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-warning&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Warning&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    Warningは文字色が黒になります。メイド比「4.5:1」ってやつですね！
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-danger&quot;&gt;
  &lt;div class=&quot;message-header&quot;&gt;Danger&lt;/div&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    よくメリットの紹介で使っている色は危険色だったりします。
  &lt;/div&gt;
&lt;/div&gt;
</pre>
  </div>



</div>
<div class="columns">
  <div class="column is-6">
    <div class="message">
      <div class="message-body">
        シンプルなので結構好きです。
      </div>
    </div>
    <div class="message is-dark">
      <div class="message-body">
        class="message-header"の部分が無いだけでこのデザインになります。
      </div>
    </div>
    <div class="message is-primary">
      <div class="message-body">
        色合いは上記のボックスのようにクラスをつけるだけですよ！
      </div>
    </div>
    <div class="message is-link">
      <div class="message-body">
        関連リンクなんかに使えそうです
      </div>
    </div>
    <div class="message is-info">
      <div class="message-body">
        インライン要素はWordPlessテーマcocoonなんかと合わせているのですが、ボックスはごめんなさい。
      </div>
    </div>
    <div class="message is-success">
      <div class="message-body">
        安定のサクセスカラー
      </div>
    </div>
    <div class="message is-warning">
      <div class="message-body">
        もちろんボックス内で<code>span</code>タグも使えます
      </div>
    </div>
    <div class="message is-danger">
      <div class="message-body">
        <span class="marker-under">こんな感じ</span>
      </div>
    </div>
  </div>

  <div class="column is-6 sourceview">
    <pre class="prettyprint linenums">
&lt;div class=&quot;message&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    シンプルなので結構好きです。
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;message is-dark&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    class=&quot;message-header&quot;の部分が無いだけでこのデザインになります。
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-primary&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    色合いは上記のボックスのようにクラスをつけるだけですよ！
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-link&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    関連リンクなんかに使えそうです
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-info&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    インライン要素はWordPlessテーマcocoonなんかと合わせているのですが、ボックスはごめんなさい。
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-success&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    安定のサクセスカラー
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-warning&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    もちろんボックス内で&lt;code&gt;span&lt;/code&gt;タグも使えます
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;message is-danger&quot;&gt;
  &lt;div class=&quot;message-body&quot;&gt;
    &lt;span class=&quot;marker-under&quot;&gt;こんな感じ&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
  </div>
</div>

## まとめ

ってな感じで無難な物を用意しています。

Bulmaだけでもかなりきれいにレイアウトできるので、ぜひぜひ使ってみてください！