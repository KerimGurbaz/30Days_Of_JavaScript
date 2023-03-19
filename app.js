** Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present. (Javascript
)
Examples :
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  // Split the string into an array of words
  let words = string.split(' ');
      // Iterate over each word in the array
  for (let i = 0; i < words.length; i++) {
    // If the word has five or more letters, reverse it
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }
      // Join the array back into a string and return it
  return words.join(' ');
}
    
}



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

