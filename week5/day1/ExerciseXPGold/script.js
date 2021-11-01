document.getElementById("submit").addEventListener("click", getData)

function getData(){

    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    //console.log(JSON.stringify({firstname,lastname}))
    document.write(firstname, lastname)
}