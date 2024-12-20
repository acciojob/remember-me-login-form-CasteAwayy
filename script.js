// "use strict";

const form = document.querySelector("form");
const buttonExis = document.querySelector("#existing");

if (localStorage.getItem("username")) {
  buttonExis.classList.remove("hidden");
}
buttonExis.addEventListener("click", () => {
  alert(`Logged in as ${localStorage.getItem("username")}`);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  console.log(formData);
  const username = formData.get("name");
  const password = formData.get("password");
  if (formData.get("checkbox")) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
  alert(`Logged in as ${username}`);
});
