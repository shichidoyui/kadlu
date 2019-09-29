function openFunction(){
    $('.modal').addClass('is-active');
}
function closeFunction(){
    $('.modal').removeClass('is-active');
}
$(function() {
    $('img.lazy').lazyload();
});