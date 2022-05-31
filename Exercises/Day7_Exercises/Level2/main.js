// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a, b, value = 0) {
//     return `${a*x} + ${b*y} + c = 0`
// }

// console.log(solveLinEquation(2, 3));


// 2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.


function solveQuadEquation(a, b, c) {
    let result1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    return result1 + " " + result2
}
console.log(solveQuadEquation(1, 7, 12))


// 3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(a) {
    a.forEach(element => {
        console.log(element);
    });
}
let array = [1, 2, 3, 4, 5]
printArray(array)

// 4.Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

let myDate = new Date();

function showDateTime() {
    let day = myDate.getDay()
    let month = myDate.getMonth()
    let year = myDate.getFullYear()
    let space = " "
    let hour = myDate.getHours()
    let minute = myDate.getMinutes()

    let result = `${day}/${month+1}/${year}${space}${hour}:${minute}`
    return result
}

console.log(showDateTime());