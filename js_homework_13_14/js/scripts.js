'use strict';


//
//
// var test = {
//     createHtml: function () {
//         var div = document.createElement('div');
//         div.id = 'root';
//         document.body.appendChild(div);
//
//         var block = document.createElement('div');
//         block.className = 'block';
//         div.appendChild(block);
//
//         var titleTest = document.createElement('h4');
//         titleTest.innerHTML = this.data.title;
//         block.appendChild(titleTest);
//
//         var form = document.createElement('form');
//         block.appendChild(form);
//
//         for (var i = 0; i < this.data.questions.length; i++) {
//
//             var fieldset = document.createElement('fieldset');
//             form.appendChild(fieldset);
//
//             var legend = document.createElement('legend');
//             legend.innerHTML = this.data.questions[i].title;
//             fieldset.appendChild(legend);
//
//             for (var j = 0; j < this.data.questions[i].answers.length; j++) {
//
//                 var label = document.createElement('label');
//                 fieldset.appendChild(label);
//                 label.innerHTML = this.data.questions[i].answers[j];
//                 label.style.display = 'block';
//
//                 var input = document.createElement('input');
//                 label.insertBefore(input, label.childNodes[0]);
//                 input.setAttribute('type', 'checkbox');
//             }
//         }
//
//         var button = document.createElement('input');
//         block.appendChild(button);
//         button.setAttribute('type', 'submit');
//         button.setAttribute('value', 'Проверить мои результаты');
//         button.className = 'btn btn-default';
//
//     },
//
//     data:  {
//         title: 'Тест по какой-то теме',
//         questions: [
//             {
//                 title: 'Выбирите числа больше 5 ',
//                 answers: ['10', '4', '8'],
//                 correctAnswers: [1, 3]
//             },
//             {
//                 title: 'Выбирите числа больше 20',
//                 answers: ['22', '15', '25', '38'],
//                 correctAnswers: [1, 3, 4]
//             },
//             {
//                 title: 'Выбирите числа больше 2',
//                 answers: ['1', '3'],
//                 correctAnswers: [2]
//             }
//         ]
//     }
//
//
//
//
// };
//
// test.createHtml();



var data =   {
    title: 'Тест по какой-то теме',
        questions: [
        {
            title: 'Выбирите числа больше 5 ',
            answers: ['10', '4', '8'],
            correctAnswers: [1, 3],
            userAnswers: []
        },
        {
            title: 'Выбирите числа больше 20',
            answers: ['22', '15', '25', '38'],
            correctAnswers: [1, 3, 4],
            userAnswers: []
        },
        {
            title: 'Выбирите числа больше 2',
            answers: ['1', '3'],
            correctAnswers: [2],
            userAnswers: []

        }
    ]
};




var userAnswersTEST = ['10', '8'];


function isAnswerCorrect(userAnswer, listOfAnswers, listOfCorrectAnswers) {

    function correct() {
        var userAnswerIndex = listOfAnswers.indexOf(userAnswer);
        userAnswerIndex = userAnswerIndex + 1;
        return userAnswerIndex;
    }

   if (listOfCorrectAnswers.includes(correct()) === true) {



   } else  {



   }

}

function crossArr() {

    for (var j = 0; j<data.questions.length; j++) {
        for (var i = 0; i<userAnswersTEST.length; i++) {
            isAnswerCorrect(userAnswersTEST[i], data.questions[j].answers,data.questions[j].correctAnswers );

        }


    }
}

crossArr();











// var data =   {
//     title: 'Тест по какой-то теме',
//         questions: [
//         {
//             title: 'Выбирите числа больше 5 ',
//             answers: ['10', '4', '8'],
//             correctAnswers: [1, 3]
//         },
//         {
//             title: 'Выбирите числа больше 20',
//             answers: ['22', '15', '25', '38'],
//             correctAnswers: [1, 3, 4]
//         },
//         {
//             title: 'Выбирите числа больше 2',
//             answers: ['1', '3'],
//             correctAnswers: [2]
//         }
//     ]
// };
//
//
//
// var userAnswer;
// var userAnswersTEST = ['10', '8'];
//
// var newArr = [];
//
//
// function isCorrect () {
//
//     var userAnswer;
//
//     var isCorrect;
//
//     isCorrect = isAnswerCorrect(userAnswer, data.questions[0].answers,data.questions[0].correctAnswers );
//
//     function isAnswerCorrect(userAnswer, listOfAnswers, listOfCorrectAnswers) {
//
//         for (var i = 0; i < listOfCorrectAnswers.length; i++) {
//             var userAnswerIndex = listOfAnswers.indexOf(userAnswer);
//
//             userAnswerIndex = userAnswerIndex + 1;
//
//             if (userAnswerIndex === listOfCorrectAnswers[i]) {
//                 return true;
//
//             } else {
//                 return false;
//             }
//         }
//     }
//
//     return isCorrect;
//
//
// }
//
// newArr.push(isCorrect(userAnswersTEST));
//
//
// console.log(newArr);










