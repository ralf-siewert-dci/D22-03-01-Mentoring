function printGreeting(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Falsche Parameter";
  }
  return "Hello " + firstName.trim() + " " + lastName.trim();
}

const printGreetingArrow = (firstName, lastName) => {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Falsche Parameter";
  }
  return "Hello " + firstName.trim() + " " + lastName.trim();
};

console.log(printGreeting("  Ralf ", "Siewert"));
console.log("Other code ...");
console.log(printGreetingArrow("  Ella ", "Rotary"));
console.log("Other code ...");
console.log(printGreeting("  Muhannad ", "Lingoda"));

function add(a, b) {
  return a + b;
}
const addArrow = (a, b) => a + b;

console.log(addArrow(4, 2));
