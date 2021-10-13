//Create a function call isDivisible() that takes no parameter.
function isDivisible() {
    //In the function, loop through numbers 0 to 500.
    let result = [];
    for (let num = 0; num <= 500; num++) {
        if (num % 23 === 0) {
            result.push(num)
        }
        
    }
    //Console.log all the numbers divisible by 23.
    console.log('Outcome', result)
    //At the end, console.log the sum of all numbers that are divisible by 23.
    console.log('Sum', sum(result))
}   
function sum(result) {
    let sum = 0;
    for (let num of result) {
        sum += num;
    }
    return sum;
}

isDivisible()
