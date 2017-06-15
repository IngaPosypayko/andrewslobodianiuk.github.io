'use strict';

$('.tooltip').css({
    'opacity': 0
});


$('.input').mousemove (function () {

    $('.tooltip').css({
        'opacity': 0
    });

    $(this).parent().addClass('onAction');

    $('.onAction').prev().removeClass('tooltip').addClass('onMove');

     var $dataTooltip = $(this).attr('data-tooltip');

    var $inputPosition = $(this).position();

        $('.onMove').text($dataTooltip).css(
            {
                'left': $inputPosition.left+220,
                'top': $inputPosition.top+5
            })
            .stop().fadeTo(100, 1);
})
    .mouseout (function () {
        $('.onAction').removeClass('onAction')
            .prev()
            .stop().fadeTo(100, 0)
                    .removeClass('onMove')
                        .addClass('tooltip');

    });




$('.submit').on('click', function () {

    function tooltip(tooltipId, inputId) {
        var tooltip = $(tooltipId);
        var input = $(inputId);
        tooltip.text(input.attr('data-tooltip'))
            .css({
                'left': input.position().left + 220,
                'top': input.position().top + 5
            })
            .stop().fadeTo(100, 1);
    }
    tooltip('#tooltip_1', '#input_1');
    tooltip('#tooltip_2', '#input_2');
    tooltip('#tooltip_3', '#input_3');


});





























