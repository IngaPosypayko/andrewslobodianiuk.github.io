'use strict';


(function timer() {

    var div = document.createElement('div');
    div.id = 'timer';
    document.body.appendChild(div);

    document.getElementById('timer').innerHTML = 'Hello';

    var start = new Date();

    setInterval(function () {
        var deltaTime = (Date.now() - start);

        var msecMinute = 1000 * 60;
        var msecHour = msecMinute * 60;
        var msecDay = msecHour * 24;

        var day = Math.floor(deltaTime / msecDay);
        deltaTime = deltaTime - ( day * msecDay);

        var hour = Math.floor(deltaTime / msecHour);
        deltaTime = deltaTime - (hour * msecHour);

        var min = Math.floor(deltaTime / msecMinute);
        deltaTime = deltaTime - ( min * msecMinute);

        var sec = Math.floor(deltaTime / 1000);

        deltaTime = deltaTime - sec * 1000;

        var msec = Math.floor(deltaTime);

        console.log('days ' + day, ':', 'hours ' + hour, ':', 'min ' + min, ':', 'sec ' + sec, ':', 'msec ' + msec);

    }, 1);


} )();














