let xhr = new XMLHttpRequest();

// Select the elements in DOM
let button = document.querySelector('#button')
let names = document.querySelector('#name')
let height = document.querySelector('#height')
let gender = document.querySelector('#gender')
let birthYear = document.querySelector('#birth-year')
let homeWorld = document.querySelector('#home-world')

// Get the data from the API 
function getData() {
    // loading
    //lodaing()
    let random = Math.floor((Math.random() * 100) + 1)
    let url = 'https://swapi.dev/api/people/' + random + '/'
    //console.log(url)
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.send()
    xhr.onload = function () {
        if (xhr.status === 200) {
            //console.log(xhr.response)
            //console.log(xhr.response.homeworld)
            names.innerText = `${xhr.response.name}`
            height.innerText = `Height: ${xhr.response.height}`
            gender.innerText = `Gender: ${xhr.response.gender}`
            birthYear.innerText = `Birth Year: ${xhr.response.birth_year}`
            homeWorld.innerText = `Home World: ${xhr.response.homeworld}`
        } else {
            xhr.onerror = function (){
                console.log('There was an erorr')
                error()
            }
        }
    }

}
function lodaing() {
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}
function error() {
    names.innerText = 'Not avialable!'
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

button.addEventListener('click', getData)