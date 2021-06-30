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

////////////////////////////////////////////////////////////////////

// 36. Functions Calling Other Functions


/* function cutFruitPieces(fruit) {
    return fruit * 3;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3)); */

////////////////////////////////////////////////////////////////////////////////////////////

// 37. Reviewing Functions

/* const calcAge = function (birthYear) {
    return 2027 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

}
console.log(yearsUntilRetirement(1971, 'Vitaly'));
console.log(yearsUntilRetirement(1960, 'Mike')); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//40. Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

//add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('Jhon');
console.log(friends);


//remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // Frist
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));