'use strict';


// (function () {
//
//
//     var timer = document.createElement('div');
//     timer.setAttribute('class', 'timer');
//     document.body.appendChild(timer);
//
//     var div = document.createElement('div');
//     div.setAttribute('id', 'timer');
//     timer.appendChild(div);
//
//     var button = document.createElement('button');
//     timer.appendChild(button);
//     button.appendChild(document.createTextNode('Старт'));
//     button.className = 'btn btn-default';
//
//     var buttonClear = document.createElement('button');
//     timer.appendChild(buttonClear);
//     buttonClear.appendChild(document.createTextNode('Очистить'));
//     buttonClear.className = 'btn btn-default';
//
//     document.getElementById('timer').innerHTML = '00:00:00:00:000';
//
//
//     button.addEventListener ('click', function () {
//
//
//         var start = new Date();
//
//         var interval = setInterval(function () {
//             var deltaTime = (Date.now() - start);
//
//             var msecMinute = 1000 * 60;
//             var msecHour = msecMinute * 60;
//             var msecDay = msecHour * 24;
//
//             var day = Math.floor(deltaTime / msecDay);
//             deltaTime = deltaTime - ( day * msecDay);
//
//             var hour = Math.floor(deltaTime / msecHour);
//             deltaTime = deltaTime - (hour * msecHour);
//
//             var min = Math.floor(deltaTime / msecMinute);
//             deltaTime = deltaTime - ( min * msecMinute);
//
//             var sec = Math.floor(deltaTime / 1000);
//
//             deltaTime = deltaTime - sec * 1000;
//
//             var msec = Math.floor(deltaTime);
//
//             if (min < 10) {
//                 min = '0' + min;
//             }
//
//             if (hour < 10) {
//                 hour = '0' + hour;
//             }
//
//             if (day < 10) {
//                 day = '0' + day;
//             }
//
//             if (sec < 10) {
//                 sec = '0' + sec;
//             }
//
//             document.getElementById('timer').innerHTML = day + ':' + hour + ':' + min + ':' + sec + ':' + msec;
//
//
//         }, 1);
//
//         buttonClear.addEventListener('click', function () {
//             clearInterval(interval);
//             document.getElementById('timer').innerHTML = '00:00:00:00:000';
//             button.innerHTML = 'Старт';
//
//         });
//
//
//         button.innerHTML = 'Пауза';
//
//
//     });
//
// })();



// (function() {
//   'use strict';
//
//   var Timer = function() {
//     this.elements = {};
//     this.intervalID = null;
//     this.isActive = false;
//     this.deltaTime = 0;
//     this.startTime = 0;
//
//     this.createLayout = function() {
//       var container = createNode('div', null, null, null);
//       container.style.border = '1px solid #ccc';
//
//       var startBtn = createNode('button', null, null, 'START'),
//       stopBtn = createNode('button', null, null, 'STOP');
//       this.elements.timeField = createNode('p', null, null, '0');
//       this.elements.timeField.style.fontSize = '3rem';
//
//       startBtn.addEventListener('click', this.start.bind(this));
//       stopBtn.addEventListener('click', this.stop.bind(this));
//
//       container.append(startBtn, stopBtn, this.elements.timeField);
//
//       return container;
//     };
//
//     this.start = function() {
//       if (!this.isActive) {
//         this.setTime();
//         this.intervalID = setInterval(this.updateTime.bind(this), 1);
//         this.isActive = true;
//       }
//     };
//
//     this.stop = function() {
//       clearInterval(this.intervalID);
//       this.isActive = false;
//     };
//
//     this.updateTime = function() {
//       this.deltaTime = new Date(Date.now() - this.startTime);
//       this.updateHTML();
//     };
//
//     this.updateHTML = function() {
//       this.elements.timeField.innerHTML = this.deltaTime.getSeconds() + ' : ' + this.deltaTime.getMilliseconds();
//     };
//
//     this.setTime = function() {
//       this.startTime = Date.now();
//     };
//
//     this.init = function() {
//       document.querySelector('#root').append(this.createLayout());
//     };
//   };
//
//   var instance1 = new Timer();
//   console.log(instance1);
//   instance1.init();
//
//   var instance2 = new Timer();
//   console.log(instance2);
//   instance2.init();
//
//   var instance3 = new Timer();
//   console.log(instance3);
//   instance3.init();
// })();



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

    this.onAction = false;
    this.pause = false;

    this.startTimer = function () {
        if (!this.onAction) {
            this.startTime = new Date();
            this.updateTimeString = setInterval(this.timerString.bind (this), 1);
            this.onAction = true;
            document.querySelector('button').innerHTML = 'Пауза';


        } else if (!this.pause) {
            clearInterval(this.updateTimeString);
            document.querySelector('button').innerHTML = 'Продолжить';
            this.pause = true;
            this.continued = false;
        }

        else if (!this.continued) {
            this.startAfterPause = new Date();
            
            this.deltaTimeAfterPause = Date.now() - this.startAfterPause + (this.startAfterPause - this.startTime);

            console.log(this.deltaTimeAfterPause);

            this.timerString(this.deltaTimeAfterPause);
            
            this.updateTimeStringAfterPause = setInterval(this.timerString(this.deltaTime), 1);
        }
    };


    this.stop = function () {
        clearInterval(this.updateTimeString);
        clearInterval(this.updateTimeStringAfterPause);
        this.onAction = false;
        document.getElementById('timer').innerHTML = '00:00:00:00:000';
        document.querySelector('button').innerHTML = 'Старт';
        this.continued = true;
        this.onAction = false;
        this.pause = false;

    };


    this.timerString = function ( start) {

        this.deltaTime  =  Date.now() - this.startTime;

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













































































