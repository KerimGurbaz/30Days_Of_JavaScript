let numOne = 3
let numTwo = 3

console.log(numOne==numTwo)

let js = "javascript"
let py = "Python"

console.log(js==py)

let lightOn = true
let lightOff =false

console.log(lightOff==lightOn)

let nums =[1, 2, 3, 4, 5, "KERIM", true]
console.log(nums) 
nums[5] =15
console.log(nums)

let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log(nums1==nums2)

let user1 ={
    name:"Kerim",
    surname:"Gurbaz"
}
let user2 ={
    name:"Kerim",
    surname:"Gurbaz"
}
console.log(user1==user2)

let nums3 = [1, 2, 3]
let nums4 = nums3;
console.log(nums3==nums4)

const randNum = Math.random()
console.log(randNum)

// Absolute Value
console.log(Math.abs(-10))

// Square root
console.log(Math.sqrt(100))

// Power
console.log(Math.pow(3,2))

console.log(Math.E)

// Trigonometry
console.log(Math.sin(0))
console.log(Math.cos(60))


// STRINGS

let space = " "     // an empty space string
let firstName = "Kerim" 

// String Concatenation

let name ="kerim"
let surname = "Gurbaz"
let fullName = name +" " + surname

console.log(fullName)

// Long Literal Strings
const paragraph = "My name is KERIM \
I live in Swindzerlan"

console.log(paragraph)

// Escape Sequences in Strings
console.log('I hope\neveryone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break

console.log('Days\ttopics\tExercises')
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('This is a backslash  symbol (\\)')
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

// Template Literals (Template Strings)

let fullName2 =`${name} ${surname}`
console.log(fullName2)

let x = 5
let y = 3
console.log(`${x} + ${y} = ${x+y}`)

console.log(`${x} is greater than ${y}: ${x>y}`)

//  String Methods
//  _length :

let js1 = "KErim GURBAZ"
console.log(js1.length)

console.log(js1[js1.length-1])

// _toUpperCase()
console.log(js1.toLocaleUpperCase())

// _toLowerCase()
console.log(js1.toLowerCase())

// substr()
let string = "JavaScript"
console.log(string.substr(4,6))

let country = "finland"
console.log(country.substr(3,4))

console.log(country.substr(2))

let country2="Switzerland"
console.log(country2.substring(1,5))

// _split()
console.log(fullName2.split())
console.log(fullName2.split(" "))

console.log(fullName2.split(""))
console.log(fullName2.split("").reverse())
console.log(fullName2.split("").reverse().join(""))

// trim(): Removes trailing space in the beginning or the end of a string.
let string2 = "         30 days of javascript        "
console.log(string2)
console.log(string.trimRight(""))

// includes():

console.log(string2.includes("days"))
console.log(string2.includes("Days"))
console.log(string2.includes("'3'"))

// replace()
let str = "HelloWorld World world,  Hello world, HElloWORLD word"
console.log(str.replace("World","planet"))
console.log(str.replaceAll("World","planet"))



// search()

let string3 = "I love JavaScript"
console.log(string3.search("love"))
console.log(string3.search(/javascript/gi))

// match()

let str4 ="love"
let patternOne =/love/  // with out any flag
let patternTwo =/love/gi // g- means to search in the whole text, i- case insensitive





