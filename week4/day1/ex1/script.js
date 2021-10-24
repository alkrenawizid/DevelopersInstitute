checkName();
checkName("kHALESSI");
checkName("Lea", "Doe")

function checkValue(x = 0, y = 1) {
	console.log("x: ", x, " y: ", y)
	let sum = x + y;
	console.log(sum)
}

checkValue(4,5); //9
checkValue(1); //2
checkValue(); //1
checkValue(0,2); //2