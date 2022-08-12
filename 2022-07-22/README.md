# Mentoring 22.07.2022

## Themen

- Functions

  - Block von Code, den man an mehreren Stellen im Programm aufrufen kann
  - Funktionen können Werte an das Programm zurückgeben, die dann dort weiter verwendet werden (`return`)
  - **WICHTIG**: `return` beendet die Funktion unmittelbar, Code nach `return` wird nicht mehr ausgeführt
  - Wenn die Funktion kein `return` - Statement enthält, gibt sie standardmäßig `undefined` zurück
  - Variablen, die innerhalb einer Funktion deklariert werden, sind außerhalb der Funktion nicht sichtbar (`scope`)
  - Man kann Funktionen Parameter übergeben, um sie mit verschiedenen Werten ("Argumenten") aufzurufen.
  - Arrow-Functions sind eine andere Schreibweise für Funktionen:
    - `function add(a,b){return a+b;}`
    - `const add=(a,b)=>{return a+b;}`
    - Schnellschreibweise für Arrow-Functions, wenn die Funktion nur einen einzigen Ausdruck als `return` hat:
      - `const add=(a,b)=> a+b`
    - Es gibt einen technischen Unterschied zwischen Standard-Funktionen und Arrow-Functions bezüglich des `this` - Keywords.
      Das ist momentan für uns noch nicht relevant, bei Interesse kann man das z.B. [hier nachlesen](https://dev.to/bhagatparwinder/arrow-functions-this-keyword-350j)

- Schleifen
  - `for` loop
  - `for of` `for in`
  - `while` `do while`
