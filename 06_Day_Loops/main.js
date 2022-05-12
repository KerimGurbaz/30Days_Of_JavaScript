// for Loop

// For loop structure
// for(initialization, condition, increment/decrement){
// code goes here
//   }

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

for (let i = 8; i >= 0; i--) {
    console.log("i", i)
}

for (let i = 0; i <= 6; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}


const countries = ["Swidzerland", "Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = []

for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase());
}
console.log(newArr);



// Adding all elements in the array

const numbers = [1, 2, 3, 4, 5, 6]
let sum = 0
let newArr2 = []
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);

for (let i = 0; i < numbers.length; i++) {
    newArr2.push(numbers[i] ** 3)
}
console.log(newArr2);


// while loop

let i = 0
while (i < countries.length) {
    console.log(countries[i])
    i++
}


// do while loop
let ii = 0
do {
    console.log(ii)
    ii++
} while (ii <= 5)

// 0 1 2 3 4 5

// for of loop

// We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

// for (const element of arr) {
//     // code goes here
// }

for (let i of numbers) {
    console.log(i * 3);
}


// adding all the numbers in the array
let sum2 = 0
for (let i of numbers) {
    sum2 += i
}
console.log(sum2);
console.log(numbers);



const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

for (const tech of webTechs) {
    console.log(tech.toUpperCase());
};

for (let i of webTechs) {
    console.log(i[0]);
};


// ****************
let newArr3 = []
console.log(countries);

for (let element of countries) {
    newArr3.push(element.toUpperCase())
}
console.log(newArr3);


// break

// Break is used to interrupt a loop.

for (let i = 0; i < countries.length; i++) {

    if (countries[i] == "Sweden") {
        break
    }

    console.log(countries[i]);
}


// continue

// We use the keyword continue to skip a certain iterations.

for (let element = 0; element < countries.length; element++) {
    if (countries[element] == "Norway") {
        continue
    }
    console.log(countries[element]);
}