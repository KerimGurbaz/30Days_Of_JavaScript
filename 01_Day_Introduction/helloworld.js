console.log("hello World!!!")

// for(let i = 0; i<=10; i++){
//     console.log(i)
// }

let total = 0
let totalFunc  = (first, second) =>{
    for(let i = first; i<second; i++){
        total +=i
    }
    console.log(total)
    return total;
}

totalFunc(2,5) // 9