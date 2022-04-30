// <!-- Conditions can be implementing using the following ways:

// if
// if else
// if else if else
// switch
// ternary operator
//  -->

//  <!-- If

//  In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}). -->


let num = 3
if (num > 0) {
    console.log(`${num} is  positive number`)
}

let isRaining = true
if (isRaining) {
    console.log("remember to take your rain coat.")
}

// If Else

// If condition is true the first block will be executed, if not the else condition will be executed.

let num1 = -5
if (num1 > 0) {
    console.log(`${num1} is a positive number`);
} else {
    console.log(`${num1} is a negative number`);
}

// let result = prompt("what is the result of 2 +5 operation? ");
// if ( result == 7){
//     console.log(`Bravo, correct answer.`);
// } else{
//     console.log(`Your answer is wrong`);
// }


let isRaining2 = true
if (isRaining2) {
    console.log("You need a rain coat");
} else {
    console.log("No need for a rain coat.");
}
let isRaining3 = false
if (isRaining3) {
    console.log("You need a rain coat");
} else {
    console.log("No need for a rain coat.");
}

// If Else if Else

// On our daily life, we make decisions on daily basis. We make decisions not by checking one or two conditions instead we make decisions based on multiple conditions. As similar to our daily life, programming is also full of conditions. We use else if when we have multiple conditions.

let b = 6
if (b > 0) {
    console.log(`${b} is a positive number`);
} else if (b < 0) {
    console.log(`${b} is a negative number`);
} else if (b == 0) {
    console.log(`${b} is zero`);
} else {
    console.log(`${b} is not a number`);
}


// if else if else

// let weather = "sunny"
// if (weather === "rainy"){
//     console.log("You need a rain coat.");
// } else if(weather === "cloudy"){
//     console.log("It might be cold, you need a jacket.");
// } else if(weather === "sunny"){
//     console.log("Go out freely.");
// } else{
//     console.log(
//     console.log("No need for rain coat.")
//     );
// }


// Switch

// Switch is an alternative for if else if else else. The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases. Case block runs if the value in the switch statement parenthesis matches with the case value. The break statement is to terminate execution so the code execution does not go down after the condition is satisfied. The default block runs if all the cases don't satisfy the condition.

let a = "10"
switch (a) {
    case 10:
        console.log("Wrong_1")
        break

    case 5:
        console.log("Wrong_2")
        break
    case "10":
        console.log("Correct answer_3");
        break
    default:
        console.log("Yu didn't know");
}


// Switch More Examples...

// let dayUserInput = prompt("What day is today ?")
// let day = dayUserInput.toLowerCase()

// switch(day){
//     case "monday" :
//         console.log("Today is Monday")
//         break

//     case "tuesday" :
//         console.log("Today is Tuesday")
//         break

//     case "wednesday" :
//         console.log("Today is Wednesday")
//         break
//     case "thursday" :
//         console.log("Today is Thursday")
//         break
//     case "friday" :
//         console.log("Today is Friday")
//         break
//     case "saturday" :
//         console.log("Today is Saturday")
//         break 
//     case "sunday" :
//         console.log("Today is Sunday");
//         break
//     default:
//         console.log("it is not a week day.");

// }



// let nums = prompt("Enter number__");
// switch (true) {
//     case nums > 0:
//         console.log("Number is positive");
//         break
//     case nums == 0:
//         console.log("Number is zero");
//         break
//     case nums < 0:
//         console.log("Number is negative");
//         break
//     default:
//         console.log("Entered value was not a number");
// }