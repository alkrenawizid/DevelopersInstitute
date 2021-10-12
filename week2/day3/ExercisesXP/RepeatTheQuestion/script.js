//Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.

let n = 0;
while (n > 10) {
  prompt("Enter a number smaller than 10", n);
  break;
}