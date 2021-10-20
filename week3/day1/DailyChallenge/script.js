let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
let color = ["red", "lightblue", "lightgreen", "purple", "lightyellow"];
let moons = [2, 1, 1, 2, 2];

let sectionElements = document.getElementsByClassName("listPlanets")[0];

function showPlanets() {
  for (let i = 0; i < planets.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "planet";
    newDiv.style.background = color[i];

    for (let j = 0; j < moons[i]; j++) {
      let moon = document.createElement("div");
      moon.className = "moon";
      moon.style.background = "lightgrey";
      newDiv.appendChild(moon);
    }

    sectionElements.appendChild(newDiv);
  }
}

showPlanets();