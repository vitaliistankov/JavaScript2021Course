'use strict';

/* let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D'); */

/* function logger() {
    console.log('My name is Vitalii');
}

//calling / running / invokong function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



//Function declaration
const age1 = calcAge1(1971);


function calcAge1(birthYear) {
    return 2037 - birthYear;
}


//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1971);

console.log(age1, age2);


//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2027 - birthYear;
const age3 = calcAge3(1971);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2027 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
    console.log(yearsUntilRetirement)
}

console.log(yearsUntilRetirement(1971, 'Vitalii'));
console.log(yearsUntilRetirement(1979, 'Artem'));
*/

// 36. Functions Calling Other Functions


function cutFruitPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));