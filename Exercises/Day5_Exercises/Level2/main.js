// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

console.log(countries);
console.log(webTechs);


// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");

console.log(words.split(" ").length);



// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// a- add 'Meat' in the beginning of your shopping cart if it has not been already added

shoppingCart.unshift("Meat")
console.log(shoppingCart);

// b- add Sugar at the end of you shopping cart if it has not been already added

shoppingCart.push("Sugar");
console.log(shoppingCart);

// c- remove 'Honey' if you are allergic to honey

let empty = [];

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] == "Honey") {
        break;
    } else {
        empty.push(shoppingCart[i])
    }
    console.log(empty);
}


// d- modify Tea to 'Green Tea'

// let index = shoppingCart.indexOf("Tea");
// shoppingCart[index] = "Green Tea"
// console.log(shoppingCart);

// or

let index = shoppingCart.indexOf("Tea");

if (index !== -1) {
    shoppingCart[index] = "Green tea"
}
console.log(shoppingCart);



// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let index2 = countries.indexOf("Ethiopia")

if (index2 !== -1) {
    console.log(countries[index2].toUpperCase())
} else {
    console.log(countries.push("Ethiopia"))
}


// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

let index3 = webTechs.indexOf("Sass")

if (index3 !== -1) {
    console.log("Sass is a CSS preprocess")
} else {
    console.log(webTechs.push("Sass"))
}

console.log(webTechs);


// 6.Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd)

console.log(fullStack);