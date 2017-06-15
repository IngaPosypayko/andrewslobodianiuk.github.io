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


    $('#tooltip_1').text($('#input_1').attr('data-tooltip'))
        .css(
            {
                'left': $('#input_1').position().left+220,
                'top': $('#input_1').position().top+5
            })
        .stop().fadeTo(100, 1);
    $('#tooltip_2').text($('#input_2').attr('data-tooltip'))
        .css(
            {
                'left': $('#input_2').position().left+220,
                'top': $('#input_2').position().top+5
            })
        .stop().fadeTo(100, 1);

    $('#tooltip_3').text($('#input_3').attr('data-tooltip'))
        .css(
            {
                'left': $('#input_3').position().left+220,
                'top': $('#input_3').position().top+5
            })
        .stop().fadeTo(100, 1);

});





























