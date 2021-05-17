
      /*
      let js = "amazing";
      console.log (40 + 8 + 23 - 10);

      console.log("Jonas");
      console.log(23);

      let firstName = "Matilda";
      

      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

      
     let javascriptIsFun = true;
     console.log(javascriptIsFun);

     //console.log(typeof true);
     console.log(typeof javascriptIsFun);
     //console.log(typeof 23);
     //console.log(typeof 'Jonas');

     javascriptIsFun = 'YES!';
     console.log(typeof javascriptIsFun);

     let year;
     console.log(year);
     console.log(typeof year);

     year = 2015;

     console.log(typeof year);
     console.log(typeof null);

     
     
     console.log(ageJonas, ageSarah);

     console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
     const firstName = 'Jonas';
     const lastName = 'Stankov';
     console.log(firstName + ' ' + lastName);

     //Math operators

     let x = 10 + 5;
     console.log(x);
     x += 10; //x = x +10 = 25
     x *= 4; //x = x * 4 = 100
     x++; // x = x + 1
     x--;
     x--;
     console.log(x);

     //Comparison operators
     console.log(ageJonas > ageSarah);
     console.log(ageSarah >= 18);

     const isFullAge = ageSarah >=18;
    

     const now = 2037;
     const ageJonas = now - 1991;
     const ageSarah = now - 2018;

     console.log(now - 1991 > now - 2018);

     let x, y;
     x = y = 25-10-5;
     console.log(x, y);

     const averagAge = (ageJonas + ageSarah) / 2
     console.log(ageJonas, ageSarah, averagAge);

 

     //////////////////////////////////////////////////

     // 17. Strings and Template Literals

     /* const firstName = 'Vitaly';
     const job = 'student';
     const birthYear = 1971;
     const year = 2037;
     
     const vitaly = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!';
     console.log(vitaly);
     const vitalyNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
     console.log(vitalyNew);

     console.log(`Just regular string...`)

     console.log('String with \n\
     multiple \n\
     lines');

     console.log(`String
     multiple
     lines`);
      //////////////////////////////////////////////////////////////
      
      //18. Taking decisions

const age = 15;

if(age >=18){
      console.log('Sarah can start driving license 🚗')
}else{
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2013;

let century;
if (birthYear <=2000) {
      century = 20;
} else {
      century = 21;
}
console.log(century);

 */
//////////////////////////////////////////////////////////////////

//20 Type conversion and coercion (Преобразование или приведение)

/* const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Vitalii'));
console.log(typeof NaN);

console.log(String(23), 23); */

//type coercion
/* console.log('I am ' + 49 + ' years old')
console.log('49' + '10' + 9);
console.log('49' / '2');
console.log('49' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n); */

/////////////////////////////////////////////////////////////////////////////////////////

//21. Truthy and Falsy Values 

// 5 falsy values: 0, '', undefined. null, NaN

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Vit'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
      console.log("Don't spent it all ;)");
} else {
     console.log('You should get a job!');
}

let height = 0;
if (height) {
      console.log('YAY! Height is defined!');
}else{
      console.log('Height is UNDEFINED')
} */
      
/////////////////////////////////////////////////////////////////////////////////////////

//22. Equality Operators: == vs. ===


/* const age = '18';
if (age === 18) console.log('You just became an adult:D (strict)');
if (age == 18) console.log('You just became an adult:D (loose)');
    
const favourite = Number(prompt("What your favourite namber?"));
console.log(typeof favourite);

if (favourite === 49) {
      console.log('Awesome! 49 is an amazing number!') 
} else if (favourite === 7) {
      console.log('7 is also a cool number')
} else if (favourite === 9) {
      console.log('9 is also a cool number')
} else {
      console.log('Number is not 49 or 7')
}

if (favourite !==49) console.log('Why not 49?') */

//////////////////////////////////////////////////////////////////////////////////////////////////

//24. Logical Operators

/* const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/* if (hasDriversLicense && hasGoodVision) {
      console.log('Sarah is able to drive!')
} else {
      console.log('Someone else should drive...')
} */
/* 
const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
      console.log('Sarah is able to drive!')
} else {
      console.log('Someone else should drive...')
} */ 

///////////////////////////////////////////////////////

// 26. The switch Statement

/* const day = 'thursday';

switch(day){
      case 'monday': // day === 'monaday'
            console.log('Plan course structure');
            console.log('Go to coding meetup');
            break;
      case 'turesday':
            console.log('prepare theory videous');
      case 'wednesday':
      case 'thursday':
            console.log('Write code examples');
            break;
      case 'friday':
            console.log('Record videos');
            break;
      case 'saturday':
      case 'sunday':
            console.log('Enjoy the weekend :D');
            break;
      default:
            console.log('Not a valid day!');
}


if(day === 'monday') {
      console.log('Plan course structure. Go to coding meetup')
}else if(day === 'turesday') {
            console.log('prepare theory videous'); 
}else if (day === 'wednesday' || day === 'thursday') {
      console.log('Write code examples')
}else if (day ==='friday') {
      console.log('Record videos');
}else if (day === 'saturday' || day === 'sunday') {
      console.log('Enjoy the weekend :D');
}else{
console.log('Not a valid day!');
}


if(day === 'monday') {
      console.log('Plan course structure. Go to coding meetup')
}else if(day === 'turesday') {
            console.log('prepare theory videous'); 
}else if (day === 'wednesday' || day === 'thursday') {
      console.log('Write code examples')
}else if (day ==='friday') {
      console.log('Record videos');
}else if (day === 'saturday' || day === 'sunday') {
      console.log('Enjoy the weekend :D');
}else{
console.log('Not a valid day!');
} */

/* const day = 'friday';

if(day === 'monday') {
      console.log('You can hold your head')
}else if(day === 'turesday' ||  day === 'wednesday') {
            console.log('Stay in bed'); 
}else if (day === 'thursday') {
      console.log('Watch the walls instead')
}else if (day ==='friday') {
      console.log(`I'm in love`);
}else if (day === 'saturday') {
      console.log('Wait');
}else if (day === 'sunday') {
      console.log('Always comes too late');
}else{
console.log('(Oh)Do-do, do-do, do-do, do, Do-do, do-do, do-do, do(Oh, oh, whoa, whoa)!');
} */

/////////////////////////////////////////////////////////////////////

//28. The Conditional (Ternary) Operator

//const age = 23;
// age >= 18 ? console.log('I like to drink vodka 🥃🥃🥃' ) : 
// console.log('You can only drink shit 👽!')

 //const drink = age >= 18 ? 'vodka 🥃🥃🥃' : 'shit 👽!';
 //console.log(drink);

 
 