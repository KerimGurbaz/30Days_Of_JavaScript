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