let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

userCart["lastname"] = "Smith"
console.log(userCart)

userCart["prices"]["pear"] *= 1.7
console.log(userCart)

let fruit = prompt('Which fruit you want Apple, Banana and Pear?').toLowerCase()
console.log('The fruit of the user is:', fruit)