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
                answers: [' 1', '3'],
                correctAnswers: [2]
            }
        ]
    }




};




test.createHtml();






// var UserAnsw = [true, false, true];
//
//
//     for (var i = test.data.questions[0].correctAnswers[0]; i < UserAnsw.length; i++) {
//
//         console.log(i);
//
//         if (UserAnsw[i] === true) {
//         alert('hello');
//
//
//     } else {
//         alert('close');
//
//         }
//     }





// for(var i =0; i< userAnswers.length; i++) {
//     var userAnswer = userAnswers[i];
//     var isAnswerCorrect = isAnswerCorrect(userAnswer, listOfAnswers, listOfCorrectAnswers);
// }
//
// function isAnswerCorrect(userAnswer, listOfAnswers, listOfCorrectAnswers){
//     for(var i =0; i<listOfCorrectAnswers.length; i++){
//         var userAnswerIndex = listOfAnswers.indexOf(userAnswer);
//         if(userAnswerIndex == listOfCorrectAnswers[i]){
//             return true;
//             break;
//         }
//     }
//     return false;
// }



