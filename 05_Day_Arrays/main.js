// // How to create an empty array

// // In JavaScript, we can create an array in different ways. Let us see different ways to create an array. It is very common to use const instead of let to declare an array variable. If you ar using const it means you do not use that variable name again.

// // const name =Array()
// // console.log(name);


// // let name2 =[]
// // let name3 = ["Kerim", "Gurbaz", 1987, "Turkey"]
// // console.log(name3.length);

// // const numbers = [0, 3.14, 9.81, 37, 98.6, 100,200]


// console.log(numbers.length)

// // Creating an array using split
// // As we have seen in the earlier section, we can split a string at different positions, and we can change to an array. Let us see the examples below.

// let js ="JavaScript"
// const charsinJavaScript = js.split("")
// console.log(charsinJavaScript);


// let name2 = "Kerim,Gurbaz , Switzerland, 34"
// let newName2= name2.split("")
// console.log(newName2);

// let companiesStr = "Faceebook, Google, Microsoft, Apple, IBM, Oracle"
// const newCompanies =companiesStr.split(",")
// console.log(newCompanies);


// // Accessing array items using index

// console.log(newCompanies[0]);

// let LastIndex = newCompanies.length -1
// console.log(newCompanies[LastIndex]);


// // Modifying array element

// // An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

const numbers = [0, 3.14, 9.81, 37, 98.6, 100,200]

numbers[0] = 10
numbers[1] = 20
numbers[3] = 30

console.log(numbers); // [10, 20, 9.81, 30, 98.6, 100, 200]


// Methods to manipulate array

// There are different methods to manipulate an array. These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift

// Array Constructor

// Array:To create an array.

const arr = Array(5) // it creats five empty values
console.log(arr); // [empty * 5]

// Creating static values with fill

// fill: Fill all the array elements with a static value

const fiveXXvalues = Array(5).fill("XX")
console.log(fiveXXvalues);

const fourXvalues = Array(4).fill("X")
console.log(fourXvalues);

const eight0values = Array(8).fill("0")
console.log(eight0values); 

// Concatenating array using concat

// concat:To concatenate two arrays.

const firsList = [1, 2, 3, 4]
const secondList = [5, 6, 7, 8]
let otherList = [9,11,13]
const thirdList = firsList.concat(secondList,otherList)
console.log(thirdList);



// Getting index an element in arr array

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const nums = [1,2,3,4,5,6]
console.log(nums.indexOf(1));
console.log(nums.indexOf(5));
console.log(nums.indexOf("6"));

const fruits = ["banana", "orange", "mango", "lemon"]
let index = fruits.indexOf("banana")
if(index === -1){
    console.log("This fruit does not exist in the array_1");
} else{
    console.log("This fruit does exist in the array_2");
}

index ===-1 ? console.log("This fruit does not exist in the array_1") : console.log("This fruit does exist in the array_2");


let indexApple = fruits.indexOf("apple")
if(indexApple === -1 ){
    console.log("This fruit does not exist in the array__1")
} else{
    console.log("This fruit exist in the array__2");
}


// Getting last index of an element in array

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers2 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers2.lastIndexOf(2)) // 7

console.log(numbers2.lastIndexOf(0))

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

console.log(numbers2.includes(3));
console.log(numbers2.includes("3"));


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] // List of web technologies

  console.log(webTechs.includes("HTML"));


//   Checking array

// Array.isArray:To check if the data type is an array

console.log(Array.isArray(webTechs))


// Converting array to string

// toString:Converts array to string

const numbers3 = [11, 22, 33, 44, 55]
console.log((numbers3.toString()) ) // 1,2,3,4,5

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook


// Joining array elements

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.join(" -")) 


// Slice array elements

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names3.slice(1,3));


// Splice method in array

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.


const surname =["ali", "ayse", "daniel", "Jhon", "Guide"]
console.log(surname.splice(1,2,"kjhjkl", "*"));
console.log(surname)



// Adding item to an array using push

// Push: adding item in the end. To add item to the end of an existing array we use the push method.

surname.push("KERIM")
console.log(surname);


// Removing the end element using pop

// pop: Removing item in the end.

surname.pop()
console.log(surname)


// Removing an element from the beginning

// shift: Removing one array element in the beginning of the array.


// Reversing array order

// reverse: reverse the order of an array.

const numbers6 = [1, 2, 3, 4, 5]
numbers6.reverse() // -> reverse array order

console.log(numbers6) // [5, 4, 3, 2, 1]

numbers6.reverse()
console.log(numbers6) // [1, 2, 3, 4, 5]

// Sorting elements in array

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

const webTechs2= [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs2.sort()
  console.log(webTechs2)