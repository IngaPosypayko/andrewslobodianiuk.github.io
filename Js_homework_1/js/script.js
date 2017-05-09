'use strict';


var number = prompt('Enter the number');
var degree = prompt('Set a degree');

function mathPow(numberStatic, degreeStatic) {
    var number = numberStatic;
    var result;

    if (degreeStatic == 0) {
        return 1;
    }
    else {
        if (degreeStatic > 0) {
            for (var i = 1; i <= degreeStatic - 1; i++) {
                result = number * numberStatic;
                number = result;
            }
            return result;
        } else {
            degreeStatic = degreeStatic * (-1);
                for (var i = 1; i <= degreeStatic - 1; i++) {
                    result = number * numberStatic;
                    number = result;
                }
                return 1/result;
        }
    }
}


console.log(mathPow(number, degree));














































