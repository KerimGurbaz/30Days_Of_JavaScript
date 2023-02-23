// Function Declaration

// Let us see how to declare a function and how to call a function.

function sayHello() {
    console.log("Hello Kerim");
}
sayHello()

// Function without a parameter and return

// Function can be declared without a parameter.

// Example:

function square() {
    let num = 3
    let sq = num * num

    console.log(sq);
}

function add(a+b){
   return a+b
}

add(3+8)

square() // 9  (calling function by its name and with parentheses)

// function without parameter

function addTwoNumbers() {
    let numOne = 11
    let numTwo = 22
    let sum = numOne + numTwo
    console.log(sum);
}
addTwoNumbers() // a function has to be called by its name to be executed


function printFullName() {
    let firstName = "Kerim"
    let lastName = "Gurbaz"
    let space = " "
    let fullName = firstName + space + lastName
    console.log(fullName);
}
printFullName();

// Function returning value

// Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function printFullName() {
    let firstName = "Kerim"
    let lastName = "Gurbaz"
    let space = " "
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName());


function twoNumbers() {
    let numOne = 4
    let numTwo = 5
    let total = numOne + numTwo
    return total
}
console.log(twoNumbers());



// Function with a parameter

// In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

// function functionName(parm1) {
//     // code goes here
// }
// functionName(parm1) // durig calling or invoking one  argument needed

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(5));

function square(number) {
    return number * number
}
console.log(square(2));


// Function with two parameters

function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum);
}
sumTwoNumbers(10, 20) //  calling functions
sumTwoNumbers("Kerim", "GURBAZ")


function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName("DAMLA", "GURBAZ"));


// Function with many parameters
// this function takes array as a parameter and sum up the numbers in the array


function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
const numbers = [1, 2, 3, 45];
// calling a function
console.log(sumArrayValues(numbers));



// Function with unlimited number of parameters
// Unlimited number of parameters in regular function

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4, 5)); // 15

console.log(sumAllNums(10, 20)); // 30


// Unlimited number of parameters in arrow function

const sumAll = (...args) => {
    console.log(args);
}
sumAll(1, 2, 3, 4)


// function declaration

const sumAllNumss = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(sumAllNumss(1, 2, 3, 4, 5));


// Anonymous Function

const anonymousFunc = function () {
    console.log("Kerim Gurbaz");
}
anonymousFunc()


// Expression Function

const square1 = function (p) {
    return p * p
}
console.log(square1(2));

// Self Invoking Functions

(function (n) {
    console.log(n * n);
})(22)


let squareNum = (function (n) {
    return n * n
})(33)

console.log(squareNum);


// Arrow Function

// Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ["Swidzerland", "Turkey"]
console.log(changeToUpperCase(countries));


// Function with default parameters

function greetings(name = "Peter") {
    let message = `${name}, Welcome to 30 days of javascript!`
    return message
}

console.log(greetings());
console.log(greetings("KERIM"))


function sayHello(name) {
  console.log("Merhaba " + name + "!");
}

sayHello("Ahmet"); // "Merhaba Ahmet!" yazdırır


Basit bir hesap makinesi fonksiyonu:

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Geçersiz operator";
  }
}

console.log(calculator(5, 3, "+")); // 8
console.log(calculator(5, 3, "-")); // 2
console.log(calculator(5, 3, "*")); // 15
console.log(calculator(5, 3, "/")); // 1.6666666666666667
console.log(calculator(5, 3, "%")); // "Geçersiz operator"
