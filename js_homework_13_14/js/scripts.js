'use strict';

var test = {
    createHtml: function () {
        var div = document.createElement('div');
        div.id = 'root';
        document.body.appendChild(div);

        var block = document.createElement('div');
        block.className = 'block';
        div.appendChild(block);

        var titleTest = document.createElement('h4');
        titleTest.innerHTML = this.data.title;
        block.appendChild(titleTest);

        var form = document.createElement('form');
        block.appendChild(form);

        for (var i = 0; i < this.data.questions.length; i++) {

            var fieldset = document.createElement('fieldset');
            form.appendChild(fieldset);

            var legend = document.createElement('legend');
            legend.innerHTML = this.data.questions[i].title;
            fieldset.appendChild(legend);

            for (var j = 0; j < this.data.questions[i].answers.length; j++) {

                var label = document.createElement('label');
                fieldset.appendChild(label);
                label.innerHTML = this.data.questions[i].answers[j];
                label.style.display = 'block';

                var input = document.createElement('input');
                label.insertBefore(input, label.childNodes[0]);
                input.setAttribute('type', 'checkbox');
            }
        }

        var button = document.createElement('input');
        block.appendChild(button);
        button.setAttribute('type', 'submit');
        button.setAttribute('value', 'Проверить мои результаты');
        button.className = 'btn btn-default';

    },

    data:  {
        title: 'Тест по какой-то теме',
        questions: [
            {
                title: 'Выбирите числа больше 5 ',
                answers: ['10', '4', '8'],
                correctAnswers: [1, 3]
            },
            {
                title: 'Выбирите числа больше 20',
                answers: ['22', '15', '25', '38'],
                correctAnswers: [1, 3, 4]
            },
            {
                title: 'Выбирите числа больше 2',
                answers: ['1', '3'],
                correctAnswers: [2]
            }
        ]
    },

    cheack: function () {
        var correctAnswersArr = [];

        function isAnswerCorrect(userAnswer, listOfAnswers, listOfCorrectAnswers) {

            function correct() {
                var userAnswerIndex = listOfAnswers.indexOf(userAnswer);
                userAnswerIndex = userAnswerIndex + 1;
                return userAnswerIndex;
            }
            if (listOfCorrectAnswers.includes(correct()) === true) {
                correctAnswersArr.push(true);
            } else  {
                correctAnswersArr.push(false);
            }
        }

        function crossArr() {
            for (var j = 0; j<test.data.questions.length; j++) {
                for (var i = 0; i<test.data.questions[j].answers.length; i++) {
                    isAnswerCorrect(test.data.questions[j].answers[i], test.data.questions[j].answers,test.data.questions[j].correctAnswers );
                }
            }
        }
        crossArr();

        return correctAnswersArr;

    }
};

test.createHtml();

var correctAnswers = test.cheack();
var userAnswers;
var result = [];
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

function getAnswers(arr) {
    return _.map(arr, function(item) {
        return item.checked;
    });
}


var inputs = document.querySelectorAll('input[type="checkbox"]');

document.querySelector('input[type="submit"]').addEventListener('click', function () {

    userAnswers = getAnswers(checkboxes);

    for (var i = 0; i<userAnswers.length; i++ ) {
        if (userAnswers[i]  === correctAnswers[i]) {
            result.push(true);
        }

        else {
            result.push(false);
        }
    }

    console.log(result);

    for (var j = 0; j<inputs.length; j++ ) {
        if (inputs[j] === true) {
            console.log('hi');


        } else {
            console.log('no');


        }

    }



});














