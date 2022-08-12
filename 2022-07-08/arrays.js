// slice is non-desctructive, it creates a new array
const names = ["Ella", "Mohamad", "Vural", "Yaman"];

names[0] = "Rahman";
console.log(names);

const newArray = names.slice(1, 3);

console.log("names:", names);
console.log("newArray", newArray);

names.splice(1, 2, "Ralf", "Zaid");

console.log("names after splice", names);
console.log(names.indexOf("sdkgjuhs"));
