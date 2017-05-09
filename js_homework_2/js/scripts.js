'use strict';

var listOfNames = [];
for (var i = 0; i < 5; i++) {
    listOfNames.push(prompt('Enter the name'));
}

var enteredName = prompt('Submit your name');

for (var i = 0; i < listOfNames.length; i++) {
    
    var nameFromList = listOfNames[i].toLowerCase();
        if (enteredName.toLowerCase() == nameFromList){
            break
        }
}

if (enteredName.toLowerCase() == nameFromList) {
    alert(enteredName + ', вы успешно вошли!');

} else {
    alert('Ошибка');

}






























