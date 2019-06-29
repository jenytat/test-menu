$(document).ready(function () {
    $('#sub-menu > a').click(function () {
        $('#sub-menu ul').slideUp();

        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });

    $('.sidebar-menu > ul > li > a').click(function () {
        $('.sidebar-menu > ul > li > a, #sub-menu a').removeClass('active');
        $(this).addClass('active');
    });

    $('#sub-menu ul li a').click(function () {
        $('#sub-menu ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('#end-menu > a').click(function () {
        $('#end-menu ul').slideUp();

        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
        } else {
            $(this).next().slideToggle();
        }
        return false;
    });

    $('.sidebar-menu__submenu > li > a').click(function () {
        $('.sidebar-menu__submenu > li > a, #end-menu a').removeClass('active');
        $(this).addClass('active');
    });

    $('#end-menu ul li a').click(function () {
        $('#end-menu ul li a').removeClass('active');
        $(this).addClass('active');
    });

    if ($(window).width() < 1224) {
        $('.menu__burger').click(function () {
            $('.menu ul').slideUp();

            if ($(this).next().is(":visible")) {
                $(this).next().slideUp();
            } else {
                $(this).next().slideToggle();
            }
            return false;
        });
    }
});
