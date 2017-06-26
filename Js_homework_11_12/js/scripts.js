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






