// Convert the below promise into async await:


// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);



async function requestData () {

		let fetched = await fetch('https://swapi.dev/api/starships/9/');
		if(fetched.status === 200){
	    	let response = await fetched.json();
	    	console.log(response)
		} else {
			throw new Error("Not 200")
		}
}
requestData ()


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling'); // calling
    let result = await resolveAfter2Seconds();
    console.log(result); // resolved
}

asyncCall();