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

const result = data.find((person) => person.age > 18);

console.log(result);
