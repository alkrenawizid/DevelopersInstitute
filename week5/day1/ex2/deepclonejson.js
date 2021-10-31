//JSON SOLUTION TO A DEEP CLONE

// WITH ARRAYS

let myArr = ["blue", "red", ["apple", "orange"], "white"];

// not nested
// Shallow copy
let myNewArr = [...myArr];
myNewArr[0] = "pink";
console.log(`The first item of myArr is ${myArr[0]}, 
	The first item of myNewArr is ${myNewArr[0]}`)


// nested
// Shallow copy
myNewArr[2][0] = "blueberry";
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArr is ${myNewArr[2][0]}`)

//Using JSON 
let myNewArrString = JSON.stringify(myArr);
console.log("myNewArrString = ",myNewArrString, typeof(myNewArrString))

let myNewArrJavascript = JSON.parse(myNewArrString)
console.log("myNewArrJson = ",myNewArrJavascript, typeof(myNewArrJavascript))

myNewArrJavascript[2][0] = "blueberry";
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArrJson is ${myNewArrJavascript[2][0]}`)

// USING COMPOSING
let myColorsArr = ["blue", "red", ["apple", "orange"], "white"];

let myNewColorsArray = JSON.parse(JSON.stringify(myColorsArr))
// process
// 1. First, we stringify and the string that we receive, we pass it 
// as an argument of the parse method

console.log(myNewColorsArray)

// deep copy
myNewColorsArray[2][0] = "blueberry";
console.log(`The third item of myArr is ${myColorsArr[2][0]}, 
	The third item of myNewArrJson is ${myNewColorsArray[2][0]}`)