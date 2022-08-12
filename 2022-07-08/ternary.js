let check = true;

let ternaryMessage = check ? "Check is true" : "Check is false";
console.log(ternaryMessage);

let ifMessage;
if (check) {
  ifMessage = "Check is true";
} else {
  ifMessage = "Check is false";
}
console.log(ifMessage);

// 1=loading 2=ok 3=error
let state = 1;

let message = state === 1 ? "loading" : state === 2 ? "ok" : "error";

console.log(message);

let ifStateMessage;
if (state === 1) {
  ifStateMessage = "loading";
} else if (state === 2) {
  ifStateMessage = "ok";
} else {
  ifStateMessage = "error";
}

console.log(ifStateMessage);
