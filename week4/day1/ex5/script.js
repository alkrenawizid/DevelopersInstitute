let btn1 = document.getElementById("1")
let btn2 = document.getElementById("2")
let btn3 = document.getElementById("3")


// the callback function should be a function declaration


function btn1Action (event){
	alert(`I am ${event.target.textContent} button`)
}
btn1.addEventListener("click", btn1Action)
//the callback function should be an anonymous function


let btn2action = function(event) {
	alert(`I am ${event.target.textContent} button`)
}
btn2.addEventListener("click", btn2action)

// the callback function should be an anonymous ARROW function

btn3.addEventListener("click", (event) =>
  alert(`I am ${event.target.textContent} button`)
);