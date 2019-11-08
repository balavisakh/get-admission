$(document).ready(function() {

    $('.main-inner-list').click(function() {
        var tab_id = $(this).attr('data-tab');


        $('.main-inner-list').removeClass('active_color');
        $('.main_once ').removeClass('active_two');

        $(this).addClass('active_color');
        $("#" + tab_id).addClass('active_two');

    });


});
// var div_top = $('.menu').offset().top;

var div_top = $('.menu');

$(window).scroll(function() {
    var window_top = $(window).scrollTop() - 0;
    if (window_top > div_top) {
        if (!$('.menu').is('.sticky')) {
            $('.menu').addClass('sticky');
        }
    } else {
        $('.menu').removeClass('sticky');
    }
});
$(".filter_det").click(function() {
    var id = $(this).attr('data-id');

    if ($('#' + id).hasClass('d-block')) {
        $('#' + id).removeClass('d-block')
        $('#' + id).addClass("d-none");
    } else {
        $('#' + id).addClass("d-block");
    }




});

$(".filter_child").click(function() {

    $(".inner_filter").removeClass("d-block");
    $(".iconcloseopen").removeClass("rotates");
    $(this).find(".inner_filter").addClass("d-block");
    $(this).find(".iconcloseopen").addClass("rotates");
});