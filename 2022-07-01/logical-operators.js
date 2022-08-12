let a = true;
let b = true;

let resultAnd = a && b;
let resultOr = a || b;
let resultNot = !a;

console.log(resultAnd);
console.log(resultOr);
console.log(resultNot);

let n = 25;
let m = 30;

if (!(n < 30)) {
  console.log("Block1");
} else {
  console.log("Block2");
}

let x = 4 + 5 * 3;
let y = (4 + 5) * 3;

if (!(n < m && n < 10)) {
  console.log("Block1");
} else {
  console.log("Block");
}

console.log("Aufgabe 1" + !(n < m && n < 10));
