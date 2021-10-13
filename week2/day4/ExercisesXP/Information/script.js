// Part I
//Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
    //The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    console.log('Alkrenawi zid, 32')
}
//Call the function.
infoAboutMe()

//Part II
//Create a function called infoAboutPerson(personName, personAge, personFavoriteColor)
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    //The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log(personName + `\n` + personAge +`\n`+ personFavoriteColor)
}
//Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//Part III
//Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
function infoAboutPerson2(personName, personAge, personFavoriteColor, personHobbies) {
    //The function shoul console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log('You name is', personName + `\n` + 'you are ' + personAge + ' years old,' +`\n`+ 'your favorite color is ' + personFavoriteColor)
    console.log(personHobbies)
}


//Call the function twice with the following arguments:
infoAboutPerson2("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson2("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

