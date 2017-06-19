

$(document).ready(function () {

    'use strict';

    var $position;

    $('.main_menu>li').hover(function () {

        $(this).children('ul').stop (false, true).slideDown(400);

    }, function () {

        $(this).children('ul').stop (false, true).slideUp(1);

        
    });

    $('.sub_menu>li').hover(function () {

        $position = $(this).position();

        $(this).children('ul').css({

            'left': 150,
            'top': $position.top

        }).stop (false, true).slideDown(400);
    }, function () {

        $(this).children('ul').stop (false, true).slideUp(1);

    });


    $('.sub_menu').prev().append(' >');

});



$(document).ready(function () {
    'use strict';
            $('.jcarousel').jcarousel({
                animation: {
                    duration: 800,
                    easing:   'linear',
                    complete: function() {
                    }

                }

            });


        $('.jcarousel-prev').click(function() {
            $('.jcarousel').jcarousel('scroll', '-=1');
        });

        $('.jcarousel-next').click(function() {
            $('.jcarousel').jcarousel('scroll', '+=1');

        });


});




