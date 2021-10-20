// Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let r = document.body.firstElementChild;
r.removeChild(r.lastElementChild);

// Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
let secVariable = document.getElementsByTagName("h2")[0];

secVariable.addEventListener("click", function(){
    secVariable.style.background = 'lightblue';
})

// Set the font size of the h1 tag to a random pixel size between 0 to 100
let random = Math.floor(Math.random() * 100);
document.getElementsByTagName("h1")[0].style.fontSize = random;

// Add an event listener which will hide the h3 when it’s clicked on (use the display property).
document.getElementsByTagName("h3")[0].addEventListener("click", function (){
    document.getElementsByTagName("h3")[0].style.display = "none";
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let button = document.createElement("button");
button.textContent = "Bold All Paragraphs";
r.appendChild(button);
button.addEventListener("click", bold);

function bold (e){
for (let index = 0; index < document.getElementsByTagName("p").length; index++) {
    document.getElementsByTagName("p")[index].style.fontWeight = "bold";
}
}


