const myh2 = document.querySelector("#myh2")
const btn = document.querySelector(".btn");
const hometown = document.querySelector(".hometown");

let show = true





const myList = document.querySelectorAll(".mylist");

myList.forEach((item)=>console.log(item.innerHTML))

// myList.map((element)=>console.log(element.innerText))

//  querySelectorAll methodu, NodeList olarak bir dizi döndürür. NodeList, bir dizi gibi görünse de, bir dizinin sahip olduğu tüm yöntemlere sahip değildir. Özellikle, NodeList, map yöntemini desteklemez.

function generateColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }

//    myh2.style.color ="red";


btn.addEventListener("click", function(){

    if(show){
        hometown.innerHTML = "Country";
        show = false
        
        myh2.style.color =generateColor();

    } else{
        hometown.innerHTML = "Hometown";
        show = true
        myh2.style.color =generateColor()
    }

})

// otherWay

// btn.addEventListener("click", function(){
//     hometown.innerHTML = show ? "Country" : "HomeTown";
//     show = !show
// })

