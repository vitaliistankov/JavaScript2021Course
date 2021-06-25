//////////////////////////////////////////////////////////////////

//JavaScript Fundamentals – Part 1

//LECTURE: Values and Variables

/* 1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console */

//const country = "Bulgaria";
//const continent = "Europe";
//let population = 7;

//console.log(country);
//console.log(continent);
//console.log(population); 

/////////////////////////////////////////////////////////////////////////////////

//LECTURE: Data Types

/* 1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */


// 1
//const isIsland = false;
//let language;

// 2
//console.log(typeof isIsland);
//console.log(typeof population);
//console.log(typeof country); 
//console.log(typeof language);

/////////////////////////////////////////////////////////////////////

//LECTURE: let, const and var

/* 1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens */

//language = "Bulgarian";
//const country = 'Bulgaria';
//const continent = "Europe";
//const isIsland = false;
//isIsland = true;
//console.log(language);
//language = "Bulgarian";



////////////////////////////////////////////////////////////////

//LECTURE: Basic Operators
/*
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese
*/

/* console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 =
 country +
 ' is in ' +
 continent +
 ', and its ' +
 population +
 ' million people speak ' +
 language;
 console.log(description1)
 */



///////////////////////////////////////////////////////////////////////
//LECTURE: Strings and Template Literals

/* 1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

//const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
//console.log(description);


////////////////////////////////////////////////////////////////////
//LECTURE: Taking Decisions: if / else Statements

/* 1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

//let population = 13;
//const country = "Bulgaria";

/* if(population > 33) {
    description =`${(country)}'s population is above average `;
} else{
    description = `${(country)} population is ${(33-population)} below average `;
}

console.log(description); */

/* if (population > 33) {
    console.log(`${country}'s population is above average`);
}else{
    console.log(
        `${country}'s population is ${33 - population} million below average`
    );
} */

/////////////////////////////////////////////////////////////////////////////////////////

//LECTURE: Type Conversion and Coercion

/* 1. Predict the result of these 5 operations without executing them:
'9' - '5'; //"4"
'19' - '13' + '17'; //"617"
'19' - '13' + 17; //23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; //1143
2. Execute the operations to check if you were righ */

///////////////////////////////////////////////////////////////////////////////

//LECTURE: Equality Operators: == vs. ===
/* 1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation */

/* const numNeighbours = Number(prompt ('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else if (numNeighbours == 0) {
    console.log('No borders'); */

/////////////////////////////////////////////////////////////////////////////////////////////   

// LECTURE: Logical Operators

// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily 
// change some variables in order to make the condition true (unless you live in 
// Canada :D

//const country = "Bulgaria";
//const country = "England";
//const language = "Bulgarian";
//const language = "English";
//const population = 25;
//const isIsland = true;



/* if (language === "English" && language === "English" && population < 50 && !isIsland)
console.log(`You should live in ${country} :)`);
else
console.log (`${country} does not meet your criteria :(`); */

/////////////////////////////////////////////////////////////////////////////

//LECTURE: The Conditional (Ternary) Operator

/* 1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original;


const country = "Bulgaria";
const population = 7;

population > 33 ? console.log (`${country}'s population is above average`) :
console.log(`${country}'s population is below average`);

average = population > 33 ? 'above' : 'below';
console.log(average);

console.log(`${country}'s population is ${population > 33? 'above': 'below'} average`,); // the code from solutions

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////

// JavaScript Fundamentals – Part 2

/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'.Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries.Store the
returned values in 3 different variables, and log them to the console */

'use strict';
function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} million people and its
capital city is ${capitalCity}`;
    return description;
}

const finland = describeCountry('Finland', '6', 'Helsinki');
const bg = describeCountry('Bulgaria', '7', 'Sofia');
const ua = describeCountry('Ukraine', '40', 'Kiev');
console.log(finland, bg, ua);
//console.log(bg);
//console.log(ua);


//////////////////////////////////////////////////////////

//LECTURE: Function Declarations vs. Expressions
/* 1. The world population is 7900 million people.Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents.For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
    store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations(can be
the same populations) */


//Function declaration

const chinaPercentage = percentageOfWorld1(1441);
const usPercentage = percentageOfWorld1(332);
const russiaPercentage = percentageOfWorld1(145);

console.log(chinaPercentage, usPercentage, russiaPercentage);


/* function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    //return calcPercentage;
} */

//Function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const funcExpChinaPercentage = percentageOfWorld2(1441);
const fincExpUsPercentage = percentageOfWorld2(332);
const funcExpRussiaPercentage = percentageOfWorld2(145);
console.log(funcExpChinaPercentage, fincExpUsPercentage, funcExpRussiaPercentage);

//////////////////////////////////////////////////////////////////////////////////

//LECTURE: Arrow Functions
/* 1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3' */

//const percentageOfWorld3 = population => (population / 7900) * 100;

//const chinaPercArrow = percentageOfWorld3(1441);
//const usPercArrow = percentageOfWorld3(332);
//const rusPercArrow = percentageOfWorld3(145);

//console.log(chinaPercArrow, usPercArrow, rusPercArrow);

//LECTURE: Functions Calling Other Functions
/* 1. Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country' and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2 % of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

function percentageOfWorld1(population) {
    return (population / 7900) * 100;

}

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage} % of the world.`
};
console.log(describePopulation('China', 1441));


