'use strict';


var $li = $('li'),
    $p = $('p'),
    $links = $ ('.links'),
    textId,
    currentLi,
    currentLinks;

$p.hide().first().show();


$li.on('focusin', function () {

    currentLi = $(this);

    $li.removeClass('active');

    currentLi.addClass('active');

});

$links.on('focus',function () {

    currentLinks = $(this);

    textId = currentLinks.attr ('href');

    $p.hide();

    $(textId).show();

} );




