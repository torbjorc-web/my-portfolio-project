const colors = ["#f4f4f4", "#ffeaa7", "#a29bfe", "#55efc4", "#fab1a0"];
let index = 0;

const button = document.getElementById("colorButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  index = (index + 1) % colors.length;
  document.body.style.backgroundColor = colors[index];
  message.textContent = `Background color changed to ${colors[index]}.`;
});
