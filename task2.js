//  Task-2:
// Count how many times a string has the letter `a` or `A`

let person = "Tonmoy sutradhar";
let count = 0;
for (let i = 1; i <= person.length; i++) {
  if (person[i] == "a" || person[i] == "A") {
    count++;
  }
}
console.log(count);
