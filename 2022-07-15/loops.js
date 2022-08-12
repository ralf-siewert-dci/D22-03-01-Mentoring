const myFamily = ["Ralf", "Sonja", "Paul", "Lena"];
const myNumbers = [2, 6, 9, 12, 17];

// console.log("Hello", myFamily[0]);
// console.log("Hello", myFamily[1]);
// console.log("Hello", myFamily[2]);
// console.log("Hello", myFamily[3]);

for (let i = 0; i < myFamily.length; i++) {
  console.log(myFamily[i]);
}

let sum = 0;

for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
  //   sum = sum + myNumbers[i];
}
console.log("Summe:", sum);
