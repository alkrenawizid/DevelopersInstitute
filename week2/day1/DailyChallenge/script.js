let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(fruits.shift())

console.log(fruits.sort())

console.log(fruits.push("Kiwi"))

fruits = console.log(fruits.slice(1, 5).reverse())


console.log(moreFruits[1][1][0])