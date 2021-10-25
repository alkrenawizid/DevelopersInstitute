// First Part
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variables `characters` equal to an empty array
// 3. In the startWars function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// 4. The createCharacter function should console.log the fullname of the character,
// and push it to the `characters` array.
// 5. Call the `createCharacter` function a few times inside the starWars function
// and console.log the `characters` array
// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `createCharacter` function should now console.log the fullname and spaceship
// of the character
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?

function starWars (spaceship) {
	let characters = [];
	function createCharacter(firstName, lastName = `Smith`) {
		console.log(`Character full name is:${firstName} ${lastName} ${spaceship}`)
		characters.push(`${firstName} ${lastName}`)
	}
	createCharacter(`Jhonatan`)
	console.log(characters)
	createCharacter(`Jhon`)
	console.log(characters)
	createCharacter(`Jhony`)
	console.log(characters)
}
starWars(`The Devastator`)
starWars(`Republic Attack Cruiser`)