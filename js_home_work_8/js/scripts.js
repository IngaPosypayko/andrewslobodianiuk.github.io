'use strict';



$('tooltip').css('opacity', '0');



$('[data-tooltip]').mousemove (function () {

    var $dataTooltip = $(this).attr('data-tooltip');

    var $test = $(this);


    // console.log($('[data-tooltip]').position());
    console.log($test.position());



    $('.tooltip').text($dataTooltip).css({
        'opacity': 1,
        'left': 260,
        'top': 0
    });


})
    .mouseout (function () {
        $('.tooltip').css({
                'opacity': 0

        }
        );


    });


// $('.pass').mousemove (function () {
//
//     var $dataTooltip = $(this).attr('data-tooltip');
//
//
//     $('.tooltip').text($dataTooltip).css({
//         'left': 460,
//         'top': 455
//     })
//
//         .show();
// })
//     .mouseout (function () {
//         $('.tooltip').hide();
//
//     });
//
// $('.pass_confirm').mousemove (function () {
//
//     var $dataTooltip = $(this).attr('data-tooltip');
//
//
//     $('.tooltip').text($dataTooltip).css({
//         'left': 460,
//         'top': 480
//
//     })
//
//         .show();
// })
//     .mouseout (function () {
//         $('.tooltip').hide();
//
//     });


























