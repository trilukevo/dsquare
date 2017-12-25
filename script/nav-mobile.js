$(document).ready(function () {
    $('.icon').click(function () {

        $('.icon').toggleClass('active');
        $('.nav-mb-wrapper').toggle('nav-mb-wrapper');
    });
    $('.nav-mb').on('click', 'li', function () {
        $('.icon').toggleClass('active');
        $('.nav-mb-wrapper').toggle();
    });
});