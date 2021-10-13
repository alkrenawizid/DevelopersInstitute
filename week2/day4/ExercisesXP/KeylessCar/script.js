//Ask the user for their age, and save the value to a variable.
let age = parseInt(prompt('Please enter you age:'));
//Create a function called checkDriverAge() that will notify the user if they are permitted to drive. 
//They must be at least 18 to drive.
function checkDriverAge(age) {
    if (age === 18) {
        alert('Congratulations on your first year of driving. Enjoy the ride!')
    } else if (age >= 19) {
        alert('You are old enough to drive, Powering On. Enjoy the ride!')
    } else if (age <= 17){
        alert('Sorry, you are too young to drive this car. Powering off')
    }
}

checkDriverAge(13);
