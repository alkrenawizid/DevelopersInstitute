let xhr = new XMLHttpRequest();

//2. Set the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//3. Response Type
xhr.responseType = 'json'

//4. Send the request
xhr.send();


//5. when the request is complete and the response is fully downloaded.
xhr.onload = function() {
	if (xhr.status != 200) {
	 	console.log("error status")
		displayError(xhr)
	} else {
		console.log("Finished Loading")
		console.log("the response is :", xhr.response)
		console.log("the response type is :", typeof(xhr.response))
		displayUser(xhr.response)
 	}
};


// Create a li inside the loop
// Append the li to the div
const displayUser = (response) => {
	let users = document.getElementById("users")
	response.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.name} - ${info.email}`
		users.appendChild(li)
	});

}

const displayError = (xhr) => {
	console.log("in display error")
	let error = document.getElementById("error");
	let h2 = document.createElement("h2");
	h2.textContent = `Error : ${xhr.status}`
	h2.style.backgroundColor = 'pink';
	error.appendChild(h2);
}

xhr.onprogress = function(event) {
	console.log("progress", xhr)
};


// when there is a NETWORK error
xhr.onerror = function(event) {
	console.log("ERROR")
	console.log("error", xhr);
};