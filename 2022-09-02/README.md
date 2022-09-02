# Mentoring 02.09.2022

- Callbacks

  - Callbacks sind Funktionen, die wir anderen Funktionen als Parameter übergeben, um bestimmte Teilaufgaben zu erledigen. Damit machen wir die Funktion, der wir den Callback übergeben, viel flexibler und vielseitiger einsetzbar. (Beispiel: [printFrame](callbacks.js))

- Higher Order Functions

  - Funktionen, die Callbacks als Parameter entgegennehmen, nennen wir "Higher Order Functions"
  - Viele Array-Funktionen sind "Higher Order Functions", z.B.
    - find
    - sort
    - filter
    - map
    - reduce
    - forEach
    - some
    - every

- Ausblick: HTML und JavaScript
  - Wir verbinden eine HTML-Datei und eine JavaScript-Datei mit dem `script` Tag:
    - `<script src="index.js" defer></script>`
    - `defer` sorgt dafür, dass das SCript erst geladen wird, wenn das HTML-Dokument vollständig geladen ist.
  - Wir können einzelne Elemente aus dem HTML mit `document.querySelector()` auswählen.
  - Auf Events reagieren wir, indem wir einem Element einen "Eventlistener" Callback hinzufügen:
    - `button.addEventListener("click",()=>{console.log("Click!!")})`
  - Neue Elemente erzeugen wir mit `document.createElement()`
  - Wichtig: Erzeugte Elemente müssen anschließend noch im HTML (DOM) platziert werden, z.B. mit `document.body.append()`
