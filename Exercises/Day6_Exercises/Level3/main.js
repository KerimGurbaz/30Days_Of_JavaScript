 // 1.Copy countries array(Avoid mutation)

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
 // solution1  -->  Array’s Slice() method)

 // let newCountries = countries.slice()
 // console.log(newCountries);

 // solution2  -->  Array’s Slice() method)

 let newArray = [...countries]
 console.log(newArray);



 // 2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

 let sortedCountries = newArray.sort()

 console.log(sortedCountries);

 const points = [40, 100, 1, 5, 25, 10];
 let newPoints = points.sort(function (a, b) {
     return a - b
 });
 console.log(newPoints);

 let newPoints2 = points.sort(function (a, b) {
     return b - a
 })
 console.log(newPoints2);


 // 3.Sort the webTechs array and mernStack array


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

 console.log(webTechs.sort());
 console.log(mernStack.sort())


 // 4.Extract all the countries contain the word 'land' from the countries array and print it as array


 for (let i = 0; i < countries2.length; i++) {
     if (countries2[i].includes("land")) {
         console.log(countries2[i]);
     }
 }



 // 5.Find the country containing the hightest number of characters in the countries array
 let longChar = ""
 for (let i = 0; i < countries2.length; i++) {
     if (longChar.length < countries2[i].length) {
         longChar = countries2[i]
     }
 }
 console.log(longChar);
 console.log('Central African Republic'.length);


 // 6.Extract all the countries contain the word 'land' from the countries array and print it as array
 let includesLand = [];
 for (let i = 0; i < countries2.length; i++) {
     if (countries2[i].includes("land")) {
         includesLand.push(countries2[i])
     }
 }
 console.log(includesLand);

 // 7.Extract all the countries containing only four characters from the countries array and print it as array

 let fourChar = []
 for (let i = 0; i < countries2.length; i++) {
     if (countries2[i].length == 4) {
         fourChar.push(countries2[i])
     }
 }
 console.log(fourChar);



 // 8.Extract all the countries containing two or more words from the countries array and print it as array

 let moreWords = []

 for (let i = 0; i < countries2.length; i++) {
     if (countries2[i].split(" ").length >= 2) {
         moreWords.push(countries2[i])
     }
 }
 console.log(moreWords);


 // 9.Reverse the countries array and capitalize each country and stored it as an array

 // solution1:
 let capitalize = []
 let reverseCountries = countries2.reverse()
 for (let i = 0; i < countries2.length; i++) {
     capitalize.push(reverseCountries[i].toUpperCase())
 }
 console.log(capitalize);


 // solution2:

 let capitalize2 = []
 for (let i = countries2.length - 1; i >= 0; i--) {
     capitalize2.push(countries2[i].toUpperCase())

 }
 console.log(capitalize2);