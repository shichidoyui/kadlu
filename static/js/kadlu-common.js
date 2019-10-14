
/** サブウィンドウシステム「0:最小 1:半分 2:全画面」 */
var modalLebel = Number(1);

/** サブウィンドウシステム 最小からの復帰時の座標記憶 */
var subWindowX = Number(0);
var subWindowY = Number(0);

$(function () {
    // barba.init();
    barba.init({
        transitions: [{
            afterEnter() {
                // サブウィンドウシステム・シンタックスハイライトをリロード
                subWindowInit();
                PR.prettyPrint();

            },
            after() {
                // サイドバーのメニューを一度クリアし、本体の目次をコピー
                initToc();
                initDesign();
            }
        }]
    });
    // サブウィンドウシステムのコマンド読み込み
    subWindowCommand();
    // 各ボタンにサブウィンドウ用のボタンを登録
    subWindowInit();
    // 共通部分のボタンを登録
    initButton();
    // デザイン周り
    initDesign();
    // DOMロード後、ショードコードの画像に対してlazyloadを付与
    $('img.lazy').lazyload();
});


/**
 * モーダル制御のメソッド (一度のみ)
 */
function subWindowCommand() {

    /** モーダルのドラッグを可能にする */
    $('#sub-window').draggable({
        containment: 'parent',
        scroll: false
    });

    /** モーダル拡大 */
    $('#sub-window-up').on('click', function () {
        // モーダルレベルを一つ上げる
        modalLebel = modalLebel + 1;
        if (modalLebel >= 2) {
            // モーダルレベルが2以上のとき
            // レベルの固定(保険)
            modalLebel = Number(2);
            // 現在位置を取得する。
            subWindowX = $('#sub-window').offset().left;
            subWindowY = $('#sub-window').offset().top - $(window).scrollTop();
            // 拡大ボタンを非表示にする
            $('#sub-window-up').addClass('is-hidden');
            // 全画面へのサイズ調整
            $('#sub-window').css('max-height', '100vh').height($(window).height());
            // 全画面への位置調整
            const top = $(window).scrollTop();
            $('#sub-window').offset({ top: top });
        }

        if (modalLebel === 1) {
            // モーダルレベルが1のとき
            // 画面へ真ん中へ位置調整
            $('#sub-window').css('max-height', 'calc(100vh - 60vh)');
            $('#sub-window').height($(window).height() / 10 * 4);
            const top = subWindowY + $(window).scrollTop();
            $('#sub-window').offset({ top: top, left: subWindowX });
            // 縮小ボタンを表示にする
            $('#sub-window-down').removeClass('is-hidden');
            // ドラッグ可能にする
            $('#sub-window').draggable('enable');
        }
    });

    /** モーダル縮小 */
    $('#sub-window-down').on('click', function () {
        // モーダルレベルを一つ下げる
        modalLebel = modalLebel - 1;
        if (modalLebel === 1) {
            // モーダルレベルが1のとき
            // 画面へ真ん中へ位置調整
            $('#sub-window').css('max-height', 'calc(100vh - 60vh)').height($(window).height() / 10 * 4);
            const top = subWindowY + $(window).scrollTop();
            $('#sub-window').offset({ top: top, left: subWindowX });
            // 拡大ボタンを表示にする
            $('#sub-window-up').removeClass('is-hidden');
        }
        if (modalLebel <= 0) {
            // モーダルレベルが0以下のとき
            // レベルの固定(保険)
            modalLebel = Number(0);
            // 縮小ボタンを非表示にする
            $('#sub-window-down').addClass('is-hidden');
            // 現在位置を取得する。
            subWindowX = $('#sub-window').offset().left;
            subWindowY = $('#sub-window').offset().top - $(window).scrollTop();
            // 最小化の位置へ移動する
            const top = $(window).height() - 48 + $(window).scrollTop();
            $('#sub-window').offset({ top: top, left: 0 });
            // ドラッグ不可
            $('#sub-window').removeClass('kadlu-click-invalid');
            $('#sub-window').draggable('disable');
        }
    });

    /** サブウィンドウ閉じるボタン */
    $('#sub-window-close').on('click', function () {
        // コンテンツを白紙にし、モーダルを隠す
        $('#sub-window-content').html('');
        $('#sub-window').addClass('is-hidden');
    });
}

/**
 * モーダルを開く処理
 */
function subWindowOpen() {

    if ($('#sub-window').hasClass('is-hidden')) {
        // 非表示状態の場合、位置をリセットして表示する
        $('#sub-window').removeClass('is-hidden').height($(window).height() / 10 * 4);
        const top = $(window).height() - $('#sub-window').height() + $(window).scrollTop();
        $('#sub-window').offset({ top: top, left: 0 });
        // 拡大・縮小ボタンを表示にする
        $('#sub-window-up,#sub-window-down').removeClass('is-hidden');
        // モーダルレベルをリセット
        modalLebel = Number(1);
    }
}

/** 
 * モーダルを開くボタンを設定する(リロードごと)
 */
function subWindowInit() {

    /** サブウィンドウ開くボタン */
    $('.sub-window-open').on('click', function () {
        // コンテンツをコピーし、モーダルを表示する(識別用のクラスも付与)
        $('#sub-window-content').html($(this).parent().next().html()).children().addClass('copy');;
        $('#sub-window-title').html($(this).prev().html());
        subWindowOpen();
    });

    /**
     * 内部リンクバージョン
     */
    $('.sub-window-open-link').on('click', function (e) {
        // Ajax button click
        e.preventDefault();
        var targetHref = $(this).prev().children().attr('href');
        if (true) {
            e.preventDefault();
            var data;
            $.ajax({
                url: targetHref + "/index.json",
                type: 'GET',
                contentType: 'application/json', // リクエストの Content-Type
                dataType: "json",           // レスポンスをJSONとしてパースする
            }).then(
                function (json) { // jsonの読み込みに成功した時
                    // コンテンツ入れ替え、識別クラス追加、モーダルボタンを非表示
                    $('#sub-window-content').html(json.content).children().addClass('copy');
                    $('#sub-window-content .sub-window-open,#sub-window-content .sub-window-open-link').addClass('is-hidden');
                    $('#sub-window-title').html(json.title);
                    subWindowOpen();
                },
                function () { //jsonの読み込みに失敗した時
                    console.log('失敗');
                });
        }
    });
}

/**
 * 目次遷移とスクロール(リロードごと)
 */
function initToc() {
    const hash = decodeURI(location.hash);
    if (hash) {
        $(window).scrollTop($(hash).offset().top);
    } else {
        $(window).scrollTop($('main').offset().top);
    }

    //目次の変更 クリアして変更した画面の物をコピー
    setTimeout(() => {
        $('.copy.toc').html('').html($('#toc-orign').children().html()).removeClass('is-hidden');
    });
}

/**
 * 共通部のボタン設定(一度のみ))
 */
function initButton() {
    $('.modal-background,#nav-close').on('click', function () {
        $('#nav-modal').removeClass('is-active');
    });

    $('#nav-open').on('click', function () {
        $('#nav-modal').addClass('is-active');
    });

    $('#page-top-button').on('click', function () {
        $(window).scrollTop($('main').offset().top);
    });
}

/**
 * 共通部含めたデザイン周り(リロードごと)
 */
function initDesign() {
    $('#sub-nav a').removeClass('is-active');
    $('#sub-nav a[href^="' + location.pathname + '"]').addClass('is-active');
}


