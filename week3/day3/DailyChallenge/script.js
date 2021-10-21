let input = document.getElementById("input");
let display = document.getElementById("display");

let displaying = (event) => {
  let lettersArr = event.target.value.split("");
  let displayArr = [];
  lettersArr.forEach((v) => {
    if (v.match(/^[A-Z]+$/i)) {
        displayArr.push(v);
    }
  });
  display.textContent = displayArr.join("");
};

input.addEventListener("input", displaying);