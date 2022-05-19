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