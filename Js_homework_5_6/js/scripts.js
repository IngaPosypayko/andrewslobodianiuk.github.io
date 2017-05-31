'use strict';


(function () {

    var timer = document.createElement('div');
    timer.setAttribute('class', 'timer');
    document.body.appendChild(timer);

    var div = document.createElement('div');
    div.setAttribute('id', 'timer');
    timer.appendChild(div);

    var button = document.createElement('button');
    timer.appendChild(button);
    button.appendChild(document.createTextNode('Старт'));
    button.className = 'btn btn-default';

    var buttonClear = document.createElement('button');
    timer.appendChild(buttonClear);
    buttonClear.appendChild(document.createTextNode('Очистить'));
    buttonClear.className = 'btn btn-default';

    document.getElementById('timer').innerHTML = '00:00:00:00:000';


    button.addEventListener ('click', function () {
        var start = new Date();

        var interval = setInterval(function () {
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

            if (min < 10) {
                min = '0' + min;
            }

            if (hour < 10) {
                hour = '0' + hour;
            }

            if (day < 10) {
                day = '0' + day;
            }

            if (sec < 10) {
                sec = '0' + sec;
            }

            document.getElementById('timer').innerHTML = day + ':' + hour + ':' + min + ':' + sec + ':' + msec;


        }, 1);

        buttonClear.addEventListener('click', function () {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = '00:00:00:00:000';
            button.innerHTML = 'Старт';

        });

        button.innerHTML = 'Пауза';


    });





















})();






































