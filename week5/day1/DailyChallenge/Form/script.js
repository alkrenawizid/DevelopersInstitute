document.getElementById("send").addEventListener("click", getJson)

function getJson(){

    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    console.log(JSON.stringify({firstname,lastname}))
   
}