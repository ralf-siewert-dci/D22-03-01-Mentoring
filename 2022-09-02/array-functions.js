// find -> findet das ERSTE Element im Array, das bestimmten Suchkriterien entspricht
// map -> gibt ein NEUES Array gleicher Länge zurück, jedes Element kann durch unser Callback modifiziert werden
// reduce -> Erzeugt EIN "Aggregat" Element, das z.B. die Summe aller Elemente repräsentiert
// foreach -> Allgemeine Iterations-Funktion, der Callback kann eine beliebige Funktion mit dem Element ausführen
// sort -> Sortiert ein Array: Callback bekommt zwei Elemente übergeben, wir müssen entscheiden, welches größer ist
// some -> Prüft, ob eine Bedingung bei mindestens einem Element des Arrays zutrifft
// filter -> Gibt ein neues Array mit allen Elementen zurück,
// every -> Prüft, ob alle Elemente des Arrays eine Bedingung erfüllen

const data = [
  {
    name: "Ella",
    age: 37,
  },
  {
    name: "Leo",
    age: 25,
  },
  {
    name: "Marcel",
    age: 37,
  },
];

const filteredResult = data.filter((element) => element.age > 30);

// console.log("data:", data);
// console.log("filteredResult:", filteredResult);

const sortedResult = data.sort((a, b) => {
  if (a.age < b.age) {
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    return 0;
  }
});

console.log("data:", data);
console.log("sortedResult:", sortedResult);
