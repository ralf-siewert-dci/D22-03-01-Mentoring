const revenues = [
  ["North", 100000, 200000, 150000, 300000],
  ["South", 90000, 210000, 80000, 240000],
];

for (let i = 0; i < revenues.length; i++) {
  console.log(revenues[i][0]);
  console.log("------------");
  let sum = 0;
  for (let j = 1; j < revenues[i].length; j++) {
    console.log(revenues[i][j]);
    sum += revenues[i][j];
  }
  console.log("Gesamtsumme:", sum);
}
