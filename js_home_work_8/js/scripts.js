'use strict';







var $p = $('p');

$p.css('opacity', '0');


$('.login').on('mouseover', function () {

    $('.login_hint').css('opacity', '1');

});

$('.login').on('mouseout', function () {

    $('.login_hint').css('opacity', '0');

});





