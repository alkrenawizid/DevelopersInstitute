const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//Create an array using forEach that contains all the usernames from the gameInfo array, 
//add an exclamation point (ie. “!”) to the end of every username.   

let arr = [];
gameInfo.forEach((value) => arr.push(value.username + "!"))
console.log(arr)

//Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//Tip: Use the ternary operator
let highScore = [];
gameInfo.forEach((value) => (value.score > 5 ? highScore.push(value.username) : value))
console.log(highScore)

//Find and display the total score of the users.
let totalScore = 0;
gameInfo.forEach((value) => (totalScore += value.score))
console.log(totalScore)