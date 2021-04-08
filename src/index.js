import { execute } from "./app";
import { submitClick } from "./submit";
import "../styles/sass/main.scss";

// execute();
const form = document.getElementById("main-form");
// Adding listener on Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitClick();
});
