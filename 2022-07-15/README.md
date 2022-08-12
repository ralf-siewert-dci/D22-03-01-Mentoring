# Mentoring 15.07.22

- Arrays

  - Arrays sind Listen von mehreren Variablen beliebigen Datentyps
  - Deklaration: `let myArray=["Hallo","Welt","!"]`
  - Zugriff: `console.log(myArray[1]) // => "Welt"`
    - Array-Indizes starten immer bei 0!
    - Änderungen der Elemente sind ebenfalls über den Index-Zugriff möglich: `myArray[1]="DCI"`
  - Länge eines Arrays: `myArray.length`
  - Array-Methoden
    - `myArray.push("Test")` fügt "Test" **hinten** an das Array an
    - `let newVariable=myArray.pop()` löscht den letzten Eintrag und gibt ihn zurück (z.B. um ihn in einer neuen Variablen zu speichern)
    - `myArray.unshift("Test")` fügt "Test" **vorne** an das Array an
    - `let newVariable=myArray.shift()` löscht den ersten Eintrag und gibt ihn zurück (z.B. um ihn in einer neuen Variablen zu speichern)
  - **WICHTIG** Array-Variablen sind **Referenzen** (Adressen) auf Speicherplatz.
    - ```
      let newArray=myArray;
      newArray[1]="DCI";
      console.log(newArray); // => ["Hallo","DCI","!"]
      console.log(myArray); // => ["Hallo","DCI","!"] Das ursprüngliche Array wird mit verändert!
      ```
  - Arrays können auch Arrays als Elemente enthalten:

    - ```
      const customers=[
          ["123456","Müller","Heerstraße 1"],
          ["234567","Meier","Dorotheenstraße 2"]
      ]
      console.log(customers[1][2]) // => Dorotheenstraße 2
      ```

- Loops D03-1
- if-Abfragen
- Vergleichsoperatoren
- Objekte? D03-2
- Arrays? D03-1
- functions alle
- split()
