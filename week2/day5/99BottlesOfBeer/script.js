//Prompt the user for a number to begin counting down bottles.

let bottles = +prompt('Enter a number to begin counting down bottles:');
let index = 0;

while (index < bottles) {
    console.log(`${bottles - index} bottles of beer on the wall`)
    console.log(`${bottles - index} bottles of beer`)
    console.log(`Take ${index + 1} down, pass it around`)
    console.log(`${bottles - index - 2} bottles of beer on the wall`)
    index += 1; 
    bottles -= 1; 
}