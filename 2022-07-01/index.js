let a = 456;
let binary = 0b10101;
let hex = 0xdf45a1;
let b = "5.55";

let n = 4;
let m = 5.66;

console.log(Number(a) + Number(b));
console.log(parseInt(a) + parseInt(b));
console.log(a + b);

console.log(a.toString());
console.log(a.toString(2));
console.log(a.toString(16));
console.log(binary.toString(10));
console.log(hex.toString(10));
console.log(typeof numString);

if (a < b) {
  console.log("a ist kleiner b");
  console.log("Test");
} else {
  console.log("a ist nicht kleiner b");
}
