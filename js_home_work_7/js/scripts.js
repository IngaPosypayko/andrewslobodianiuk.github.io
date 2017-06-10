'use strict';


var $li = $('li'),
    $p = $('p'),
    $links = $ ('.links'),
    textId,
    currentLi,
    currentLinks;



console.log($li);


$p.hide().first().show();
$li.first().addClass('active');


$li.on('focus', function () {

    currentLi = $(this);

    $li.removeClass('active');

    currentLi.addClass('active');

});


$links.on ('focus',function () {

    currentLinks = $ (this);

    textId = currentLinks.attr ('href');

    $p.hide();

    $ (textId).show();


} );




