let xhr = new XMLHttpRequest();

//2. Set the request
//Exercise 1 : Giphy API
//xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

// Exercise 2 : Giphy API
xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

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
		//displayUser(xhr.response)
 	}
};


const displayUser = (response) => {
	let users = document.getElementById("gifs")
	response.forEach(info => {
		let li = document.createElement("li");
		li.textContent = `${info.type} - ${info.id}`
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