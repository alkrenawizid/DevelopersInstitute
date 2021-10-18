// retrieve the div
let divElement = document.body.firstElementChild;
let divElementsecond = document.body.children[0];

// retrieve the ul
let ulElement = divElement.nextElementSibling;
let ulElementSecond = document.body.children[1];

// retrieve the li
let liElement = ulElement.lastElementChild;
let liElementSecond = ulElement.children[1];
liElement.textContent += " Smith"

console.log(divElement,divElementsecond)
console.log(ulElement, ulElementSecond)
console.log(liElement,liElementSecond)