'use strict';

$(function () {

    $('.main_menu>li').hover(function () {

        $(this).children('ul').stop (false, true).slideDown(200);

    }, function () {

        $(this).children('ul').stop (false, true).slideUp(200);
        
    });

    $('.sub_menu>li').hover(function () {
        $(this).children('ul').css({

            'left': 150,
            'top': 150

        }).stop (false, true).slideDown(200);
    }, function () {

        $(this).children('ul').stop (false, true).slideUp(200);

    });
    




})();
