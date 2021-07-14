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
/* const newLenght = friends.push('Jay');
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
console.log(friends.includes('Bob')); */


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//42. Introduction to Objects

/* const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]; 

const jonas = {
    firstName: 'Jonas',
    LastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.LastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want about Jonas? Choose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!  Choose between firstName, lastName. age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonassschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

//console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends' + ', and his best friend is called ' + jonas.friends[0]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 44. Objects methods;

const jonas = {
    firstName: 'Jonas',
    LastName: 'Schmedtman',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`

    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge

// "Jonas is a 46-year old teacher, and he has a driver's licence"

console.log(jonas.getSummary());


//console.log(jonas['calcAge'](1991));

