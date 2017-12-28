$(document).ready(function () {
    $('a').click(function () {
        var linkHref = $(this).attr('href');
        console.log($(linkHref).offset().top);
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
    });
});
$(function () {
    $(window).scroll(function () {
        let ver = window.scrollY;
        let about = $('#about').offset().top;
        let people = $('#people').offset().top;
        let work = $('#work').offset()
            .top;
        if (ver >= about - 50) {
            $('.nav-des').removeClass('show');
            $('.nav-des').addClass('dark');
        }
        if (ver >= people - 30) {
            $('.nav-des').removeClass('dark');
        }
        if (ver >= work - 50) {
            $('.nav-des').removeClass('show');
            $('.nav-des').addClass('dark');
        }
        if (ver < about) {
            $('.nav-des').addClass('show');
        }
    });
});