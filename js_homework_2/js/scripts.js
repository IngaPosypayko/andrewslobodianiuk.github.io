 'use strict';


//
// var listOfNames = [];
//
// for (var i = 0; i < 5; i++) {
//     listOfNames.push(prompt('Enter the name'));
// }
//
// var enteredName = prompt('Submit your name');
//
// for (i = 0; i < listOfNames.length; i++) {
//
//         if (enteredName === listOfNames[i]){
//             break;
//         }
// }
//
// if (enteredName === listOfNames[i]){
//     alert(enteredName + ', вы успешно вошли!');
//
// } else {
//     alert('Ошибка');
//
// }


 var listOfNames = [];

 for (var i = 0; i < 5; i++) {
     listOfNames.push(prompt('Enter the name'));
     if (listOfNames[i] === '' || listOfNames[i] === null){
         alert('Ошибка, введите имя');
         break;
     }
 }

 var enteredName = prompt('Submit your name');

 if (listOfNames.indexOf(enteredName) === (-1) || enteredName === '' || enteredName === null){
     alert('Ошибка');

 } else {
     alert(enteredName + ',Вы успешно вошли!');

 }













































