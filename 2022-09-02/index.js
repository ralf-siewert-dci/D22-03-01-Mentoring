console.log("Hallo von Javascript");

const button = document.querySelector("#mybutton");

button.addEventListener("click", () => {
  //   alert("Hallo Welt");
  //   const message = document.createElement("h2");
  //   message.innerText = "Hallo Welt";
  //   document.body.append(message);
  const content = document.querySelector("#content");
  const message = document.createElement("h2");
  message.innerText = "Hallo Welt";
  content.append(message);
});
