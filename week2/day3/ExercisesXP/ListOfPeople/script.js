let people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift()
console.log(people)

// Write code to replace “James” to “Jason”
people.splice(2,1,'Jason')
console.log(people)

//Write code to add your name to the end of the people array.

people.push('Zid')
console.log(people)

//Using a loop, iterate through the people array and console.log each person.
for (let i of people) {
    console.log(i); 
 }

//Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
for (let i of people) {
    if (i !== 'Zid') {
        console.log(i);
    }
 }

//Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name
console.log(people)
console.log(people.slice(1,3))

//Write code that console.logs Mary’s index.
console.log(people.indexOf('Mary'));

//Write code that gives the indexOf “Foo” (this should return -1). 
//It's return -1 becuase the element doesn't exists in the array
console.log(people.indexOf('Foo'));

//Create a variable called last which value is the last element of the array.
let last = people.slice(-1).pop()
console.log(last)