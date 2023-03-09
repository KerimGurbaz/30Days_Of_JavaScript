console.log("hello World!!!")

// problem 1

// for(let i = 0; i<=10; i++){
//     console.log(i)
// }


// problem2

for(let i =0; i <=10; i++){
    console.log(i*i)
}



// problem3

let total = 0
let totalFunc  = (first, second) =>{
    for(let i = first; i<second; i++){
        total +=i
    }
    console.log(total)
    return total;
}

totalFunc(2,5) // 9

