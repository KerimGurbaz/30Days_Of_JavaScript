// 1.Develop a small script which generate any number of characters random id:

// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba


// let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// let retVal = []

// let r = Math.floor(Math.random() * charSet.length + 1)
// console.log(r);
// for (let i = 0; i < r; i++) {
//     retVal.push(charSet.charAt(Math.floor(Math.random() * r + 1)))
// }
// console.log(retVal.join(""));



// 2. Write a script which generates a random hexadecimal number.
const str = []
const randomLower = () => {
    for (let i = 0; i < 2; i++) {
        str.push(String.fromCharCode(Math.floor(Math.random() * 6) + 97))
    }
}
const randomNumber = () => {
    for (let i = 0; i < 2; i++) {
        str.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
    }
}
const randomLower2 = () => {
    for (let i = 0; i < 2; i++) {
        str.push(String.fromCharCode(Math.floor(Math.random() * 6) + 97))
    }
}

console.log(randomLower());
console.log(randomNumber());
console.log(randomLower2());
console.log("#" + str.join(""));



// 3. Write a script which generates a random rgb color number.
// rgb(240,180,80)

let rgb = []
for (let i = 0; i < 3; i++) {
    rgb.push(Math.round(Math.random() * 255))
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

//   4.Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newArray = []
for (let i = 0; i < countries.length; i++) {
    newArray.push(countries[i])
}
console.log(newArray);


// 5.Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let newLength = [];
for (let i = 0; i < countries.length; i++) {
    newLength.push(countries[i].length)
}
console.log(newLength);


// 6. Use the countries array to create the following array of arrays:
const countries2 = [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
]

let countryArray = [];
for (let i = 0; i < countries.length; i++) {
    countryArray.push([`${countries[i]}`, `${countries[i].slice(0,3).toUpperCase()}`, countries[i].length])
}

console.log(countryArray);



// 7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']

let land = []
for (let i = 0; i < countries2.length; i++) {

    if (countries2[i][0].includes("land")) {
        land.push(countries2[i][0])
    }
}
console.log(land.length > 1 ? console.log(land) : console.log("All these countries are without land"));
