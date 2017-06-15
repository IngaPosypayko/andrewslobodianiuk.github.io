'use strict';



var $tooltips = $('.tooltip'),
    $inputs = $('.input');

$tooltips.css({
    'opacity': 0
});


$inputs.mousemove (function () {

    $('.tooltip').css({
        'opacity': 0
    });

        $(this).next().stop().fadeTo(100, 1);
})
    .mouseout (function () {
        $(this).next()
                .stop().fadeTo(100, 0);

    });




$('.submit').on('click', function () {
    $tooltips.stop().fadeTo(100, 1);


});





























