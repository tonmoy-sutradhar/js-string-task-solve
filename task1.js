//  Task-1:
// Count how many times a string has the letter `a`

let string = "Meghla sutradhar";
let count = 0;
// console.log(string.length);
for (let i = 1; i <= string.length; i++) {
  if (string[i] === "a") {
    count++;
  }
}
console.log(count);
