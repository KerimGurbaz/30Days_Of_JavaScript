// Exercises: Level 1

// 1. Declare a function fullName and it print out your full name.

// function fullname() {
//     console.log("Kerim GURBAZ");
// }
// fullname()

// 2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName("Damla", "GURBAZ"));


// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
    let sum = a + b
    return sum
}
console.log(addNumbers(11, 22));


// 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(a, b) {
    let area = a * b
    return area
}
console.log(areaOfRectangle(4, 5));


// 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(a, b) {
    let perimeter = 2 * (a + b)
    return perimeter
}
console.log(perimeterOfRectangle(3, 9));


// 6.Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre= 2x(uzunluk + genişlik). perimeterOfRectangle değerini hesaplayan bir fonksiyon yazın.

function volumeOfRectPrism(a, b, h) {
    let volume = a * b * h
    return volume
}
console.log(volumeOfRectPrism(3, 4, 5));


// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(3));


// 8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(5));

// 9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass, volume) {
    let x = mass / volume
    return x
}
console.log(density(20, 4));


// 10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance, time) {
    let y = distance / time
    return y
}
console.log(speed(200, 4));


// 11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity) {
    let weight = mass * gravity
    return weight
}
console.log(weight(3, 4));


// 12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(c) {
    let oF = (c * 9 / 5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(45));


// 13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bmi(weight, height) {
    let result = weight / (height * height)

    if (result < 18.5) {
        return console.log("Underweight");
    } else if (result >= 18.5 & result <= 24.9) {
        return console.log("Normal")
    } else if (result >= 25 & result <= 29.9) {
        return console.log("Overweight")
    } else {
        return console.log("Obese")
    }
}

bmi(75, 1.62)


// 14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// let monthUserInput = prompt("Which season are we in?")
// let month = monthUserInput.toLowerCase()

// function checkSeason(month) {
//     switch (month) {
//         case "march":
//             console.log("Spring")
//             break

//         case "april":
//             console.log("Spring")
//             break

//         case "may":
//             console.log("Spring")
//             break

//         case "june":
//             console.log("Summer")
//             break

//         case "july":
//             console.log("Summer")
//             break

//         case "august":
//             console.log("Summer")
//             break

//         case "september":
//             console.log("Autumn")
//             break

//         case "october":
//             console.log("Autumn")
//             break

//         case "november":
//             console.log("Autumn")
//             break

//         case "december":
//             console.log("Winter")
//             break

//         case "january":
//             console.log("Winter")
//             break

//         case "february":
//             console.log("Winter")
//             break
//         default:
//             console.log("you entered the wrong name");

//     }

// }
// checkSeason(monthUserInput)


// 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a, b, c) {
    return Math.max(a, b, c)
}
console.log(findMax(2, 366, 98));

// solution2

generateRandomIp = () => {
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 256);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(generateRandomIp());


// 16.Write a function which generates a randomMacAddress
let mac = []
generateMacAddress = () => {
    let char = "0123456789ABCDEF"
    let charSplit = char.split("");
    let krm = []

    for (let i = 0; i < 4; i++) {
        for (ii = 0; ii < 2; ii++) {
            let random = charSplit[Math.floor(Math.random() * (char.length))]
            krm.push(random)
            if (krm.length % 2 == 0) {
                mac.push(krm)
            }
        }
    }
    return mac
}
console.log(...generateMacAddress());

//************************** */

const kerim = (...args)=>{
    console.log(args[4]);
};

kerim(1,2,3,4,5)

const sumAllNum = (...args)=>{
    let sum = 0
    for(const element of args){
        sum += element
    }
    return sum
}

console.log(sumAllNum(1,2,3,4,4,5))

const anonymousFun = function(){
    console.log("I am an anonymous fonction and my name is kerim");
}

console.log(anonymousFun());

const square = function(n){
    return n**3
};
console.log(square(-25));

(function(n) {
    console.log(n*n)
})(10)

// function zehra (n){
//     return n+1
// }

// console.log(zehra(1));

const zehra = (n)=> n+1;

console.log(zehra(9))

const changeToUpperCase = arr =>{
    const newArr = []
    for (const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}

console.log(changeToUpperCase(["kerim", "gurbaz"]));

const printFullName =(firstName, lastNAme) =>{
    return `${firstName} ${lastNAme}`
}

fullname = printFullName("Kerim", "Gurbaz")
console.log(fullname)


function functionName(param = "value"){
    return `${param} degerdir.`
}

console.log(functionName());
 

function greetings(name="kerim"){
    let message =`hello ${name}`
    return message



}

console.log(greetings())
console.log(greetings("zehra"));

// Exercises: Level 2

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.




function bay (a) {
    return a
}

let ar =[1,2,3]

console.log(bay(ar));

