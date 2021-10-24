//Greet the user (ie. using the username as an argument),
// first by using function declarations
// then function expression,
// then arrow function

// --------------------
// --- Functions Declaration
// --------------------
function greeting (username){
 	console.log(username)
}
// --------------------
// --- Functions expression
// -------------------- 

const greet = function (username) {
	console.log(username)
}

// --------------------
// --- ES6 arrow functions
// --------------------

let greetArrow = (username) => "Hello " + username;


greeting("zid")
greet("alk")
console.log(greetArrow("Jhon"))