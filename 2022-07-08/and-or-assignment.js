let firstName = "";
// falsy: false, null, undefined, "", 0, NaN
// falsy => invalid
// truthy => valid

let value = "1";
if (value === true) {
  console.log("1 ist gleich true!");
} else {
  console.log("1 ist NICHT gleich true!");
}

console.log(typeof value);

const result = 2 / 3;
console.log(result);

const greeting = result || "leider ungültig";
console.log(greeting);
