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

     data: {
        title: 'Тест по какой-то теме',
        questions: [
            {
                title: 'Выбирите числа больше 5 ',
                answers: ['10', '4', '12'],
                correctAnswers: [1, 3]
            },
            {
                title: 'Выбирите числа больше 20',
                answers: ['22', '15', '25', '38'],
                correctAnswers: [1, 3, 4]
            },
            {
                title: 'Выбирите числа больше 2',
                answers: [' 1', '3'],
                correctAnswers: [2]
            }
        ]
    }
};




test.createHtml();

var numbers = [];
_.times(5, function () {
    numbers.push(_.random(1,100));
});
console.log(numbers); // ...

