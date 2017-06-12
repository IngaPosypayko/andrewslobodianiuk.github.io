'use strict';


$('tooltip').css('opacity', '0');



$('[data-tooltip]').mousemove (function () {

    var $dataTooltip = $(this).attr('data-tooltip');

    var $inputPosition = $(this).position();

    console.log($inputPosition);



    $('.tooltip').text($dataTooltip).css({
        'opacity': 1,
        'left': 260,
        'top': 0
    });


})
    .mouseout (function () {
        $('.tooltip').css({
                'opacity': 0

        });

    });




























