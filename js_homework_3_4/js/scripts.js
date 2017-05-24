'use strict';

var test = {
    createHtml: function () {
        var div = document.createElement('div');
        div.id = 'root';
        document.body.appendChild(div);

        var titleTest = document.createElement('h4');
        titleTest.innerHTML = test.data.title;
        div.appendChild(titleTest);

        var form = document.createElement('form');
        div.appendChild(form);

        for (var i = 0; i < test.data.questions.length; i++) {

            var fieldset = document.createElement('fieldset');
            form.appendChild(fieldset);

            var legend = document.createElement('legend');
            legend.innerHTML = test.data.questions[i].title;
            fieldset.appendChild(legend);

            for (var j = 0; j < test.data.questions[i].answers.length; j++) {

                var label = document.createElement('label');
                fieldset.appendChild(label);
                label.innerHTML = test.data.questions[i].answers[j];

                var input = document.createElement('input');
                label.insertBefore(input, label.childNodes[0]);
            }

        }




    },

    data: {
        title: 'Тест по какой-то теме ',
        questions: [
            {
                title: 'Вопрос #1',
                answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3']
            },
            {
                title: 'Вопрос #2',
                answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4']
            },
            {
                title: 'Вопрос #3',
                answers: ['Вариант ответа 1', 'Вариант ответа 2']
            }

        ]
    }
};





test.createHtml();

























