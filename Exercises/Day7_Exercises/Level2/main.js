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


// 5. Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

swapValues = (a, b) => {
    let x = b
    let y = a;
    console.log(x, y);
}
swapValues(3, 4)


// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

let reverseArray = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }
    return newArray
}
console.log(reverseArray([1, 2, 3, 4, 5]));


solveQuadEquation;

// reverseArr = (arr) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.unshift(arr[i]);
//     }
//     console.log(newArr);
// }
// reverseArr([3, 4, 5])

// 7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.



function capitalizeArray(array) {
    let capitalizedarray = [];
    array.forEach(element => {
        capitalizedarray.push(element.toUpperCase())
    })
    return capitalizedarray
}
x = ["Kerim", "Gurbaz", "Turkey"]
console.log(capitalizeArray(x));

// solution2

let capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element.toUpperCase())
    })
    return newArr
}
console.log(capitalizeArr(["bonjour", "tout", "le", "monde"]))


// 8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(a) {
    return Array.from(a).join("")
}
let item = "Kerim"
console.log(addItem(item));

// 9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function remoItem(index) {
    array = Array.from(index).pop()
    return array
}
let index = "Kerim"
console.log(remoItem(index));

// or
let names = ["kerim", "gurbaz", "js"]
let removitem = (index) => {
    names.splice(index);
    return names
}

console.log(removitem(1));


// 10.Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.


sumOfNumbers = (...nums) => {
    let sum = 0
    nums.forEach(element => {
        sum += element
    })
    return sum
};

console.log(sumOfNumbers(1, 2, 3, 4, 5));


// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

sumOfOdds = (...args) => {
    let sumOdd = 0
    args.forEach(element => {
        if (element % 2) {
            sumOdd += element
        }
    })
    return sumOdd
};

console.log(sumOfOdds(1, 2, 3, 4, 5, 6));


// 12.Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

sumOfEven = (...args) => {
    let sumEven = 0;
    args.forEach(element => {
        if (element % 2 === 0) {
            sumEven += element
        }
    })
    return sumEven
}

console.log(sumOfEven(1, 2, 3, 4, 5, 6));


// 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

let evensAndOdds = (number) => {
    let odd = 0
    let even = 0
    for (i = 0; i <= number; i++) {
        if (i % 2) {
            odd++
        } else {
            even++
        }

    }
    return `The number of odds are ${odd}, The number of evens are ${even}`
}
console.log(evensAndOdds(100));


// 14.Write a function which takes any number of arguments and return the sum of the arguments.

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10


let sum = (...args) => {
    let total = 0
    args.forEach(element => {
        total += element
    })
    return total
}

console.log(sum(1, 2, 3, 4));


// 15.Writ a function which generates a randomUserIp.

function randomUserIp() {
    let userId = []
    for (let i = 0; i < 3; i++) {
        let rndm = Math.floor(Math.random() * 256)
        userId.push(rndm.toString() + ".")
    }
    return userId.join("")
}
let random = Math.floor(Math.random() * 256)

console.log(`IP : ${randomUserIp() + random}`);


// solution2

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 256);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(generateRandomIp());

