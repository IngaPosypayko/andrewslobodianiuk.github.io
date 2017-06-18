'use strict';

$(function () {

    var $position;

    $('.main_menu>li').hover(function () {

        $(this).children('ul').stop (false, true).slideDown(200);

    }, function () {

        $(this).children('ul').stop (false, true).slideUp(200);
        
    });

    $('.sub_menu>li').hover(function () {

        $position = $(this).position();

        $(this).children('ul').css({

            'left': 150,
            'top': $position.top

        }).stop (false, true).slideDown(200);
    }, function () {

        $(this).children('ul').stop (false, true).slideUp(200);

    });

})();
