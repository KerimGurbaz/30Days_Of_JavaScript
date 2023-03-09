console.log("hello World!!!")

// problem 1

// for(let i = 0; i<=10; i++){
//     console.log(i)
// }


// problem2

// for(let i =0; i <=10; i++){
//     console.log(i*i)
// }



// problem3

// let total = 0
// let totalFunc  = (first, second) =>{
//     for(let i = first; i<second; i++){
//         total +=i
//     }
//     console.log(total)
//     return total;
// }

// totalFunc(2,5) // 9


// # Js - 05 : Arrays

// num1

const myArray = [1,2,3,4,5,6,7,8,9,10]

let even = 0
myArray.forEach(element => {
    if(!(element % 2)){
        even += element
        console.log(even)
        return even
    }
});




