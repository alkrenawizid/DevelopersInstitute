//Prompt the user for several words (separated by commas).

let str = prompt('Please enter words (separated by commas)').split(',');
let length = 0;

for (let index = 0; index < str.length; index++) {
    if (length < str[index].length) {
        length = str[index].length;       
    }
}

console.log('*'.repeat(length+4));

for (let index = 0; index < str.length; index++) {
    console.log("* " + str[index] + " ".repeat(length + 1 - str[index].length) + "*");
}

console.log('*'.repeat(length+4));