const data = [
  {
    name: "Leo",
    age: 25,
  },
  {
    name: "Ella",
    age: 37,
  },
  {
    name: "Marcel",
    age: 37,
  },
];

function myFind(array, callback) {
  for (const item of array) {
    if (callback(item)) {
      return item;
    }
  }
  return undefined;
}

function isPersonOlderThan25(person) {
  return person.age > 25;
}

const result = myFind(data, isPersonOlderThan25);
const result2 = myFind(data, (person) => person.age > 50);
const result3 = myFind(data, (person) => person.name.startsWith("E"));

console.log(result);
console.log(result2);
console.log(result3);
