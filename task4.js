//  Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let person = "Xion baxt";
if (person.includes("x") || person.includes("X")) {
  person = person.replace(/x/g, "y").replace(/X/g, "Y");
}
console.log(person);

// --------------------------------------------->>>

let text = "This is an example text with x and X.";

if (text.includes("x") || text.includes("X")) {
  text = text.replace(/x/g, "y").replace(/X/g, "Y");
}
console.log(text);
