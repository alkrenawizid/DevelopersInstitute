// Using these arrays :

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

color.forEach((value, index, arr) =>{
    index + 1 < ordinal.length
    ? console.log(`${index+1}${ordinal[index+1]} choice is ${value}`)
    : console.log(`${index+1}${ordinal[0]} choice is ${value}`)
})