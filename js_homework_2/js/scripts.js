/**
 * Created by andreyslobodanyk on 09.05.17.
 */

var listOfNames = [];

for (var i = 0; i < 5; i++) {

    listOfNames.push(prompt('Enter the name'));

}

var enteredName = prompt('Submit your name');

for (var i = 0; i < listOfNames.length; i++) {

    var nameFromList = listOfNames[i];

        if (enteredName == nameFromList){
            break
        }
}

if (enteredName == nameFromList) {

    alert(enteredName + ', вы успешно вошли!');

} else {

    alert('Ошибка');

}






























