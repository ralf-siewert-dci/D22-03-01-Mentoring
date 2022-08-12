const myNumbers = [1, 4, 7];
const myOtherNumbers = [3, 8, 4, 9, 12, 100];

for (let i = 0; i < myNumbers.length; i++) {
  console.log("Zahl an der Stelle", i, "ist", myNumbers[i]);
}

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i];
}
console.log("Die Summe aller Zahlen im Array ist", sum);
console.log(
  "Die Durchschnitt aller Zahlen im Array ist",
  sum / myNumbers.length
);
sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
  sum += myNumbers[i] * myNumbers[i];
}

console.log("Die Summe der Quadrate aller Zahlen im Array ist", sum);

// Eine Funktion, die ein Array mit Zahlen übergeben bekommt und den Durchschnitt zurückgibt
