let a = 6;
let b = 5;

let name = "Ralf";

if (name === "Ralf") {
  console.log("Guten Morgen Ralf");
} else if (name === "Yaaroub") {
  console.log("Guten Morgen Yaaroub");
} else if (name === "Mohamad") {
  console.log("Guten Morgen Mohamad");
}

switch (name) {
  case "Ralf":
    console.log("Guten Morgen Ralf");
    console.log("Wie geht es Dir?");
    break;
  case "Yaaroub":
    console.log("Guten Morgen Yaaroub");
    break;
  case "Mohamad":
    console.log("Guten Morgen Mohamad");
    break;
  default:
    console.log("Guten Morgen Fremder");
}
