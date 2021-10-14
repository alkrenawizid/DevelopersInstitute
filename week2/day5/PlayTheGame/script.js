//In the JS file, create a function called playTheGame() that takes no parameter
function playTheGame() {
    let play = confirm('Would you like to play the game?')
    if (!play) {
        alert('No problem, Goodbye.')
    } else {
        let number = +prompt('Enter a number between 0 and 10')
        if (number != null & number != '') {
            if (!isNaN(number)) {
                if (number <= 10 & number > 0) {
                    //alert (number + ' is a number')
                    let computerNumber = Math.floor(Math.random() * 11);
                    alert('The computer number is: ' + parseInt(computerNumber))
                    test(number, computerNumber)
                } else if (number > 10) {
                    alert('Sorry it’s not a good number, Goodbye')
                }
            } else {
                alert(number + ' Sorry Not a number, Goodbye')
            }
        }
    }
}

function test(userNumber, computerNumber) {
    let i = 1;
    do {

        if (userNumber >= computerNumber) {

            userNumber = +prompt('Your number is bigger then the computer’s, guess again')
            i++;
        } else if (userNumber <= computerNumber) {

            userNumber = +prompt('Your number is smaller then the computer’s, guess again')
            i++;
        }

        if (userNumber === computerNumber) {
            alert('Winner!')
        }
        if (i === 4) {
            break;
        }
    } while (userNumber !== computerNumber);
}