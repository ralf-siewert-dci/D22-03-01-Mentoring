function createGreeting(name, onSuccess, onError) {
  if (!name || name.length < 2) {
    onError("Name zu kurz");
  }
  onSuccess(`Liebe/r ${name}`);
}

createGreeting(
  "t",
  (greeting) => {
    console.log(greeting);
  },
  (error) => {
    console.log("Es ist ein Fehler aufgetreten!");
    console.log(`Fehlermeldung: ${error}`);
  }
);
