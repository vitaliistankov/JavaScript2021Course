
////////////////////////////
//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall
*/

// 1
/* const marksWeight = 78;
const marksHeight = 1.69;

const jhonsWeight = 92;
const jhonsHeight = 1.95; */

const marksWeight = 95;
const marksHeight = 1.88;

const jhonsWeight = 85;
const jhonsHeight = 1.76;


//2
const marksBmi = marksWeight / marksHeight ** 2;
//const marksBmi = marksWeight / (marksHeight * marksHeight);
const jhonsBmi = jhonsWeight / jhonsHeight ** 2;
//const jhonsBmi = marksWeight / (jhonsHeight * jhonsHeight);

//3

//let markHigherBMI = marksBmi > jhonsBmi;

//console.log(marksBmi);
//console.log(jhonsBmi);
//console.log(marksBmi, jhonsBmi, markHigherBMI);
//console.log(markHigherBMI);

////////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
GOOD LUCK  */



/* if(marksBmi > jhonsBmi) {
    console.log(`Mark's BMI (${marksBmi}) is higher than John's!`)
} else {
    console.log(`John's (${jhonsBmi}) BMI is higher than Mark's!`)
}
 */

//////////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK  */



//1. 

/* const dolphinsAverageScore = (96 +108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;
console.log(dolphinsAverageScore, koalasAverageScore);


if(dolphinsAverageScore > koalasAverageScore)
    console.log("Dolphins wins!")
else if (dolphinsAverageScore < koalasAverageScore)
    console.log("Koalas wins!")
else if (dolphinsAverageScore === koalasAverageScore)
    console.log("Draw!"); */


//BONUS 1

/* const minScore = 100;
const dolphinsAverageScore = (97 +112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 106) / 3;

if(dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minScore)
    console.log("Dolphins wins!")
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= minScore)
    console.log("Koalas wins!")
else if (dolphinsAverageScore === koalasAverageScore)
    console.log("Draw!") */


//BONUS 2


/* const dolphinsAverageScore = (97 + 112 + 81) / 3;
const koalasAverageScore = (109 + 95 + 86) / 3;

const minScore = 100;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minScore) {
    console.log("Dolphins wins!")
}
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= minScore){
    console.log("Koalas wins!")
}
else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= minScore && koalasAverageScore >= minScore){
    console.log("Draw!")
}else{
    console.log("No one wins!")
}  */


//////////////////////////////////////////////////////////////////////////////////

/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20 %.
Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK */


//const bill = 275;
//let tip;


// if (bill >= 50 && bill <= 300) {
//     tip = bill * 15 / 100;
// } else {
//     tip = bill * 20 / 100;
// }

//let totalValue = bill + tip;

//console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);


/* (bill >= 50 && bill <= 300) ? tip = bill * 15 / 100 : tip = bill * 20 / 100;
let totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`); */

//console.log(`${country}'s population is ${population > 33? 'above': 'below'} average`,);

/* bill >= 50 && bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill}*0.2, and the total value ${bill} + ${tip}`) :
    console.log(`The bill was ${bill}, the tip was ${bill}*0.15, and the total value ${bill} + ${tip}`);
 */

const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * .15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

