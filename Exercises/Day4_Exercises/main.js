// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let age = prompt("Please,Enter your age ?")

// age>18?console.log("You are old enough to drive."):console.log(`you are left with ${18 - age} years to drive`);



// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// let myAge = 34
// let yourAge = prompt("Please, Enter your age ?")
// if(myAge > yourAge){
//     console.log(`My age is ${myAge - yourAge} years older than your age.`);
// }else if(myAge == yourAge){
//     console.log("My age is equal to your age.");
// }else{
//     console.log(`You are ${yourAge - myAge} years older than me`);
// }



// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// --using if else
// --ternary operator.

// --if else --

// let a = 4;
// let b = 3;

// if(a>b){
//     console.log("a is greater than b");
// }else{
//     console.log("a is less than b");
// }


// --Ternary operator--

// let a = 4;
// let b = 9;

// a>b
// ?console.log(`${a} greater than ${b}`)
// :console.log(`${b} greater than ${a}`)


// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let num = prompt("Enter a number ?")
if(num % 2){
    console.log(`${num} is an odd number`);
}else{
    console.log(`${num} is an even number`);
}