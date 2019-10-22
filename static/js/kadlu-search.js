/** サイト内全データ */
var data = new Array();
/** URLから取得した検索キー */
var q = String('')
q = decodeURIComponent($(location).attr('search'));

/** オンロード  */
$(function () {

    // データの取得
    $.getJSON('../index.json', function (indexData) {
        data = indexData.data;
    }).then(
        // データの取得後、URLからキーを取得し、フォームに反映、検索
        function () {
            if (q) { q = q.slice(3); }
            $('#searchBox').val(q);
            search(q);
        }
    );

    // テキストボックスにイベントを追加
    $('#searchBox').on('keyup', function () {
        search($(this).val());
    });
});

/** 検索の一連の流れ 検索後 htmlへ画面反映 */
function search(query) {
    var result = searchData(query);
    var html = createHtml(result);
    $('#result').html(html);
    $('#resultCount').html('<b>' + result.length + '</b> 件見つかりました（' + data.length + '件中）');
}

/** 検索 */
function searchData(query) {
    var result = [];
    if (!query) { return result; }

    query = query.trim();
    if (query.length < 1) {
        return result;
    }
    var re = new RegExp(query, 'i');
    for (var i = 0; i < data.length; ++i) {
        var pos = data[i].body.search(re);
        if (pos != -1) {
            result.push([i, pos, pos + query.length]);
        }
    }
    return result;
}

/** 検索結果のHTML作成(データ配列) */
function createHtml(result) {
    var htmls = [];
    for (var i = 0; i < result.length; ++i) {
        var dataIndex = result[i][0];
        var startPos = result[i][1];
        var endPos = result[i][2];
        var url = data[dataIndex].url;
        var title = data[dataIndex].title;
        var body = data[dataIndex].body;
        htmls.push(createEntry(url, title, body, startPos, endPos));
    }
    return htmls.join('');
}

/** 検索結果のHTML作成(タグ打ち) */
function createEntry(url, title, body, startPos, endPos) {
    return '<div class="box">' +
        '<a class="title is-5 kadlu-color4" href="' + url + '">' + title + '</a>' +
        '<div class="media-content">' + excerpt(body, startPos, endPos) + '</div>' +
        '</div>';
}

/** 検索結果のHTML作成(改行) */
function excerpt(body, startPos, endPos) {
    return [
        body.substring(startPos - 30, startPos),
        '<b>', body.substring(startPos, endPos), '</b>',
        body.substring(endPos, endPos + 200)
    ].join('');
}
/** 結果の反映 */
function showResult(html) {
    $('#result').html(html);
    $('resultCount').html('<b>' + count + '</b> 件見つかりました（' + total + '件中）');
}