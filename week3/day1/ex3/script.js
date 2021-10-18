let names = ["John", "Lola", "Tom"];
let divContainer = document.getElementById('container'); 


function addStudents(){
	//create a paragraph PER name
	for (let index = 0; index<names.length; index++){
		// create a paragraph
		let newP = document.createElement("p");
		// create a text node, with the value = to the name of the student
		let newText = document.createTextNode(names[index]);
		// style the paragraph
		newP.style.backgroundColor = "yellow";
		newP.style.fontSize = "25px";
		// add the newText to the newP
		newP.appendChild(newText)
		// add the newP to the divcontainer
		divContainer.appendChild(newP)
	}
}

addStudents();