(function (user) {
    //console.log("Self invoking function")
    let div = document.getElementById("container");
    let p = document.createElement("p")
    p.textContent = `Hello ${user}`
    div.appendChild(p)
  })("zid");