let grade = prompt('Please enter your grade?');

if (grade > 90 ) {
    console.log('A')
} else if (grade > 80 & grade <= 90) {
    console.log('B')
} else if (grade >= 70 & grade >= 80) {
    console.log('C')
} else if (grade <= 69){
    console.log('D')
}