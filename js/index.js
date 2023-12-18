const form = document.getElementById("email-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  if (
    !name.validity.valid ||
    !email.validity.valid ||
    !message.validity.valid
  ) {
    showError(name);
    showError(email);
    showError(message);
    event.preventDefault();
  }
});

function showError(input) {
  const errorMessage = input.parentNode.nextElementSibling;
  const inputBox = input.parentNode.parentNode;
  if (input.validity.valueMissing) {
    errorMessage.textContent = "Sorry, input required here";
    inputBox.classList.add("active");
  } else if (input.validity.typeMismatch) {
    errorMessage.textContent = "Sorry, invalid format here";
    inputBox.classList.add("active");
  }
}
