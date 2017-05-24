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
        titleTest.innerHTML = test.data.title;
        block.appendChild(titleTest);

        var form = document.createElement('form');
        block.appendChild(form);

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
                label.style.display = 'block';

                var input = document.createElement('input');
                label.insertBefore(input, label.childNodes[0]);
                input.setAttribute('type','checkbox');
            }
        }

        var button = document.createElement('input');
        block.appendChild(button);
        button.setAttribute('type','submit');
        button.setAttribute('value','Проверить мои результаты');
        button.className = 'btn btn-default';

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

























