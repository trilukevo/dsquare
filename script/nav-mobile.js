$(document).ready(function () {
    $('.icon').click(function () {
        $('.icon').toggleClass('active');
        $('.nav-mb-wrapper').toggle();
        $('header').toggleClass('show-background');
        $('nav-mb').addClass('show-background');
        $('header').toggleClass('animated fadeInDown')
    });
    $('.nav-mb').on('click', 'li', function () {
        $('header').hide();
    });
});