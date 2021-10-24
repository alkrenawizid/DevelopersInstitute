function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    } else {
    	return "ERROR";
    }
    console.log("end of func")
}

let resultA = compare(2,3,"+");
console.log(`The result of the function is ${resultA}`) // The result of the function is 5

let resultB = compare(2,3,"-");
console.log(`The result of the function is ${resultB}`) // The result of the function is -1

let resultC = compare(2,3,"*");
console.log(`The result of the function is ${resultC}`) // The result of the function is ERROR