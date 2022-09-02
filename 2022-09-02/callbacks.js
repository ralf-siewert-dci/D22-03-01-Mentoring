function printFrame(title, footer, callback) {
  console.log("----------------");
  console.log(title);
  console.log("----------------");
  callback();
  console.log("----------------");
  console.log(footer);
  console.log("----------------");
}

function printBill(totalPrice) {
  console.log(`Ihre Rechnung beträgt ${totalPrice} EUR`);
}

function printLetter(name, text) {
  console.log(`Liebe/r ${name},`);
  console.log(text);
}

// printBill(234.8);

// printLetter("Zaid", "Vielen Dank für ...");

function printSomething() {
  console.log("Something");
}

printFrame("My Company", "Teststraße 1, Neustadt", printSomething);

printFrame("My Company", "Teststraße 1, Neustadt", () => {
  printBill(34.67);
});
printFrame("My Company", "Teststraße 1, Neustadt", () => {
  printLetter("Ralf", "Hallo! Dies und das");
});
printFrame("My Company", "Teststraße 1, Neustadt", () => {
  console.log("Das ist ein Test");
});
