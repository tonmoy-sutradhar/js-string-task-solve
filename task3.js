// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`

let versity = "American International University";
let vowels = "";

for (let i = 1; i <= versity.length; i++) {
  if (
    versity[i] === "a" ||
    versity[i] === "e" ||
    versity[i] === "i" ||
    versity[i] === "o" ||
    versity[i] === "u"
  ) {
    vowels++;
  }
}
console.log(vowels);
