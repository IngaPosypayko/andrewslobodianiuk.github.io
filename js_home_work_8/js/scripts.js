'use strict';

$('.tooltip').hide();

$('[data-tooltip]').mousemove (function () {

    $('div.tooltip').toggleClass('tooltip onMove');

     var $dataTooltip = $(this).attr('data-tooltip');

     var $inputPosition = $(this).position();

        $('.onMove').text($dataTooltip).css(
            {
                'left': $inputPosition.left+220,
                'top': $inputPosition.top+5
            })
            .show();
})
    .mouseout (function () {
        $('.onMove').hide();
    });


$('.submit').on('click', function () {
    $('div.onMove').toggleClass('tooltip onMove');

    $('.tooltip').show();

});





























