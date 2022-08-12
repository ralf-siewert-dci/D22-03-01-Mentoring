const numArray = [1, 4, 7, 8, 7, 4];

const noDuplicates = [];

for (i = 0; i < numArray.length; i++) {
  let isDuplicate = false;
  // Innere Schleife prüft, ob die aktuelle Zahl aus numArray schon im noDuplicates-Array enthalten ist:
  for (j = 0; j < noDuplicates.length; j++) {
    // Wenn die Zahl schon im noDuplicates-Array enthalten ist, wird die Variable isDuplicate auf true gesetzt
    if (numArray[i] === noDuplicates[j]) {
      isDuplicate = true;
      break;
    }
  }
  // Falls isDuplicate===false ist (die Zahl also noch nicht enthalten ist), wird sie dem noDuplicates-Array hinzugefügt
  if (!isDuplicate) {
    noDuplicates.push(numArray[i]);
  }
}

console.log("Ursprungs-Array:", numArray);
console.log("Array ohne Duplikate:", noDuplicates);
