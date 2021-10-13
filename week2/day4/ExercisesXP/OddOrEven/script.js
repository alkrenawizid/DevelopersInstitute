//Create a function called checkNumber() that takes no parameter.
function checkNumber() {
    //In the function, loop through numbers 0 to 100.
    for (let count = 0; count <= 100; count++) {
        // If the number is even, console.log "the number <number> is even"
        if (count % 2 === 0) {
            console.log('The number '+ count +' is even')
        }else if (count % 2 !== 0) {
            console.log('The number '+ count +' is odd')
        }
    }
}

checkNumber()