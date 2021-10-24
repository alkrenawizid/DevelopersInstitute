
// Create an array that holds your 3 favorite colors
let colors = ["lightblue","yellow","green"]

//Use array destructuring to save the 3 colors into 3 differents variables
let [color1,color2,color3] = colors;

console.log(color1)
console.log(color2)
console.log(color3)

//Try to create only 4 variables instead of 3, what happens ?
let [color4,color5,color6,color7] = colors;
console.log(color4)
console.log(color5)
console.log(color6)
console.log(color7)



let family = {name:"Smith", members:3, pet: true}

//Use object destructuring to save the 3 values into 3 differents variables

let {name, members, pet} = {name:"Smith", members:3, pet: true}
console.log(name, members, pet)