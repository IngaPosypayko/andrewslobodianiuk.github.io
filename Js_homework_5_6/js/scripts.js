'use strict';

var Timer = function () {

    this.creatContainer =  function () {
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

        button.addEventListener('click', this.startTimer.bind(this));

        buttonClear.addEventListener('click', this.stop.bind(this));

        document.getElementById('timer').innerHTML = '00:00:00:00:000';

    };


    this.creatTimer = function () {
        document.querySelector('body').append(this.creatContainer());

    };

    this.flag = 0;

    this.startTimer = function () {
        switch (this.flag) {
            case 0:
                this.timePause = 0;
                this.startTime = new Date();
                this.updateTimeString = setInterval(this.timerString.bind (this), 1);
                document.querySelector('button').innerHTML = 'Пауза';
                this.flag = 1;
                break;

            case 1:
                clearInterval(this.updateTimeString);
                document.querySelector('button').innerHTML = 'Продолжить';
                this.timePause = +new Date() - this.startTime;
                this.flag = 2;
                break;

            case 2:
                // данная дата больше по милисикундам чем дата с this.timePause +new Date() и получаеться что ломаеться логика так как получаеться 90 - 100 = -10 и минус 10 передаеться в тамстринг
                this.startTime = +new Date();
                this.updateTimeString = setInterval(this.timerString.bind (this), 1);
                this.flag = 1;
                document.querySelector('button').innerHTML = 'Пауза';
                break;
        }

    };


    this.stop = function () {
        clearInterval(this.updateTimeString);
        document.getElementById('timer').innerHTML = '00:00:00:00:000';
        document.querySelector('button').innerHTML = 'Старт';
        this.flag = 0;

    };


    this.timerString = function () {

        this.deltaTime  =  Date.now() - this.startTime + this.timePause;

        var msecMinute = 1000 * 60;
            var msecHour = msecMinute * 60;
            var msecDay = msecHour * 24;

            var day = Math.floor(this.deltaTime / msecDay);
            this.deltaTime = this.deltaTime - ( day * msecDay);

            var hour = Math.floor(this.deltaTime / msecHour);
            this.deltaTime = this.deltaTime - (hour * msecHour);

            var min = Math.floor(this.deltaTime / msecMinute);
            this.deltaTime = this.deltaTime - ( min * msecMinute);

            var sec = Math.floor(this.deltaTime / 1000);

            this.deltaTime = this.deltaTime - sec * 1000;

            var msec = Math.floor(this.deltaTime);

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

    };

};


var test = new Timer ();
test.creatTimer();













































































