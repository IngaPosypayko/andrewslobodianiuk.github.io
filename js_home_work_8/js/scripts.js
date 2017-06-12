'use strict';


var $inputs = $('.input'),
    $p = $('p');


$p.css('opacity', '0');



$inputs.on('mouseover', function () {

    $p.animate({
        'opacity': '1'

    });


});