let truValue = 4 > 3
console.log(truValue)

let falseValue = 4 < 3
console.log(falseValue)

//         Truthy values

// - All numbers(positive and negative) are truthy except zero
// - All strings are truthy except an empty string ('')
// - The boolean true

// Falsy values

// 0
// 0n
// null
// undefined
// NaN
// the boolean false
// '', "", ``, empty string


// Arithmetic Operators

// Arithmetic operators are mathematical operators.

let numOne = 10
let numTwo = 6
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo


console.log(sum, mult, diff, remainder,powerOf)

console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent



// --Increment Operator--

// 1. Pre-increment

let count = 0
console.log(++count)        // 1
console.log(count)          // 1


// 2. Post-increment

let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1


// --Decrement Operator--

// 1. Pre-decrement

// let count = 0
// console.log(--count) // -1
// console.log(count)  // -1


// 2. Post-decrement

let count3 = 0
console.log(count3--) // 0
console.log(count3)   // -1


// --Ternary Operators--

let isRaining = true
isRaining ? console.log("You need a rain coat.") : console.log("No need for a rain coat.")



// ---Window Methods---

// -Window alert() method

// As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

// alert("BONJOUR..!")



// Window prompt() method

// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.


// prompt('required text', 'optional text')


// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// let number1 = prompt("enter a number ?")
// console.log(number1 ** 2)


// // Window confirm() method
// const agree = confirm ("Are you sure you like delete?")
// console.log(agree ?"deletion successful" : "deletion has been cancelled")




// ----Date Object----

const now = new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getHours())
console.log(now.getDay())




