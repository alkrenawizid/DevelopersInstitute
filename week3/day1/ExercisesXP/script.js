// 1
let navId = document.getElementById("navBar");

navId.setAttribute("navId", "socialNetworkNavigation")


// 2
let newLi = document.createElement("li");
newLi.textContent = "Logout";

let ul = navId.children[0];
ul.appendChild(newLi);

// 3
console.log(ul.children[0].textContent);
console.log(ul.lastChild.textContent);