//  Task-5:
// Capitalize Every first Letter of each word in a String

let inputString = "hello world";
let capitalizedString = inputString.replace(/\b\w/g, (char) =>
  char.toUpperCase()
);
console.log(capitalizedString);

// ----------------------------------------------->>>.

let person = "tonmoy sutradhar";
let capital = person.replace(/\b\w/g, (char) => char.toUpperCase());

console.log(capital);
