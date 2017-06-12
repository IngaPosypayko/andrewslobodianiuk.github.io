'use strict';


$('tooltip').css('opacity', '0');

$('[data-tooltip]').mousemove (function () {

     var $dataTooltip = $(this).attr('data-tooltip');

     var $inputPosition = $(this).position();

        $('.tooltip').text($dataTooltip).css(
            {
                'opacity': 1,
                'left': $inputPosition.left+180,
                'top': $inputPosition.top+5
            });


})
    .mouseout (function () {
        $('.tooltip').css({
                'opacity': 0

        });

    });


$('.submit').on('click', function () {
    $('.tooltip').css(
        {
            'opacity': 1

        }
    );

});





























