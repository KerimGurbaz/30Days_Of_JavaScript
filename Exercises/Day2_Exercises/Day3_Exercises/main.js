// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Kerim";
let lastName = "Gurbaz";
let country = "Switzerland" ;
let city = "Lausanne" ;
let age = 34 ;
let isMarried = true ;
let year =2022 ;

console.log(firstName,lastName, country, isMarried, typeof year, typeof isMarried);


// 2. Check if type of '10' is equal to 10
console.log("10"===10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8")==10);

// 4. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

 // Truthy values
let statement1 = "Kerim"
let statement2 = 1987
let statement3 = true 

// Falsy values
let falsy1 = ""
let falsy2 = false
let falsy = NaN


// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
// Find the length of python and jargon and make a falsy comparison statement.

let program1 = "Python"
let program2 = "Jargon"
console.log(program1.length != program2.length) ;  // false


// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
"// There is no 'on' in both dragon and python"

console.log("Python".includes("on") && "dragon".includes("on"));


// 7. Use the Date object to do the following activities

// What is the year today?
const now = new Date()
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth());

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay());

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

