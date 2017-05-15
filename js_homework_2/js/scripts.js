'use strict';

var listOfNames = [];

for (var i = 0; i < 5; i++) {
    listOfNames.push(prompt('Enter the name'));
}

var enteredName = prompt('Submit your name');

for (i = 0; i < listOfNames.length; i++) {

        if (enteredName === listOfNames[i]){
            break;
        }
}

if (enteredName === listOfNames[i]){
    alert(enteredName + ', вы успешно вошли!');

} else {
    alert('Ошибка');

}






























