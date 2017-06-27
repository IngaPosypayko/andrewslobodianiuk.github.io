'use strict';

$.fn.slider();

var container = $('.container');

$.ajax({
    url: 'data.json'

}

).done(function (data) {

    var source   = $('#template').html(),
        template = Handlebars.compile(source),
        html    = template(data);

    container.append(html);

});

Handlebars.registerHelper('link', function(text, url) {
    url = Handlebars.escapeExpression(url);
    text = Handlebars.escapeExpression(text);
    return new Handlebars.SafeString('<p><a href="' + url + '">' + text + '</a></p>');
});






