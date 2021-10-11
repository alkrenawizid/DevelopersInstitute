let number = prompt("Enter a number:");

if (number < 2){
    alert('Boom')
} else if (number > 2 & number % 2 !== 0 & number % 5 !== 0){
    number = "o".repeat(number);
    alert('B'+ number + 'm')
} else if (number % 2 === 0 & number % 5 !== 0) {
    number = "o".repeat(number);
    alert('B'+ number + 'm!')
} else if (number % 5 === 0) {
    number = "O".repeat(number);
    alert('B'+ number + 'M!')
} else if (number % 2 === 0 & number % 5 === 0) {
    number = "o".repeat(number);
    alert('B'+ number + 'M!')
}
