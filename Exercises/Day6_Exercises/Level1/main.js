// Exercises:Day 6

// Exercises: Level 1

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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// ****** for **********

// let i = 0
// for (i; i <= 10; i++) {
//     console.log(i);
// }

// ****** while **********

// let i = 1

// while (i <= 10) {
//     console.log(i)
//     i++
// };

// ****** do while **********

// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i <= 10)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

// ****** for **********

for (let ii = 10; ii >= 0; ii--) {
    console.log(ii);
};



// ****** while **********

// let ii = 10
// while (ii >= 0) {
//     console.log(ii);
//     ii--
// };



// ****** do while **********

let ii = 10;
do {
    console.log(ii);
    ii--
} while (ii >= 0);


// 3. Iterate 0 to n using for loop

// let n = prompt("Please enter a number ? ");
// for (let i = 0; i < n; i++) {
//     console.log(i);
// };


// 4. Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

let simge = "# "
for (let i = 1; i <= 7; i++) {
    console.log(simge.repeat(i));
};


// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} X ${i} = ${i * i}`);
// }


// 6.Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// let i = 0

// do {
//     if (i == 0) {
//         console.log("i \t i^2  \t i^^3");
//     }
//     console.log(`${i**1} \t ${i**2} \t ${i**3}`)
//     i++
// } while (i <= 10);


// 7. Use for loop to iterate from 0 to 100 and print only even numbers


// for (let i = 0; i <= 100; i++) {
//     if (i % 2) {
//         continue
//     } else {
//         console.log(i);
//     }
// };


// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

// for (let ii = 0; ii <= 100; ii++) {
//     if (ii % 2) {
//         console.log(ii);
//     }

// };


// 9. Use for loop to iterate from 0 to 100 and print only prime numbers



// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0

// for (let i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);


// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// let sumOdd = 0
// let sumEven = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2) {
//         sumOdd += i
//     } else {
//         sumEven += i
//     }
// }
// console.log(sumOdd, sumEven);

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]


let sumOdd = 0
let sumEven = 0
let sum = []
for (let i = 0; i <= 100; i++) {
    if (i % 2) {
        sumOdd += i
    } else {
        sumEven += i
    }
}
console.log(sum.push(sumEven), sum.push(sumOdd));
console.log(sum);

// 13. Develop a small script which generate array of 5 random numbers
// let rndm = []
// for (let r = 0; r < 5; r++) {
//     rndm.push(parseInt(Math.random() * 10))
// }
// console.log(rndm);



// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let arr = []
while (arr.length < 5) {
    const r = Math.floor(Math.random() * 10 + 1);
    if (arr.indexOf(r) === -1) {
        arr.push(r)
    }
}
console.log(arr);


// 15. Develop a small script which generate a six characters random id:

// "5j2khz"

let length = 6
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let retVal = "";
for (let i = 0, n = charset.length; i < length; i++) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
}
console.log(retVal);



// SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.

const alan = function (taban, yukseklik) {
    return taban * yukseklik / 2
}
console.log(alan(5, 8));


// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.

const kareAl = (a) => {
    return a ** 2
}
console.log(kareAl(5));

const kupAl = (a) => {
    return a ** 3
}
console.log(kupAl(4));


const usAl = (a, b) => {
    return a ** b
}
console.log(usAl(2, 3));


// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir. 


// const leapYear = function (year) {
//     if (year % 400 == 0) {

//         return console.log(year + " is a leap year");
//     } else if (year % 100 != 0 & year % 4 == 0) {
//         return console.log(year + " is a leap year");
//     } else {
//         return console.log(year + " is not a leap year");
//     }
// }

// const year = prompt("Please, Enter a year : ")
// leapYear(year)