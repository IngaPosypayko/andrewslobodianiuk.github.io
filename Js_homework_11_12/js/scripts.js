'use strict';

$.fn.slider();

var user = $('.user');

$.ajax({
    url: 'data.json'

}

).done(function (data) {

    var source   = $('#template').html(),
        template = Handlebars.compile(source),
        html    = template(data);

    user.append(html);

});

Handlebars.registerHelper('link', function(text, url) {
    url = Handlebars.escapeExpression(url);
    text = Handlebars.escapeExpression(text);
    return new Handlebars.SafeString('<a href="' + url + '">' + text + '</a>');
});

Handlebars.registerHelper('photo', function(photoUrl) {
    photoUrl = Handlebars.escapeExpression(photoUrl);
    return new Handlebars.SafeString('<img src="' + photoUrl + '">');
});






