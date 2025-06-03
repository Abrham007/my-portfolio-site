const form = document.getElementById("email-form");
const senderName = document.getElementById("name");
const senderEmail = document.getElementById("email");
const senderMessage = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    !senderName.validity.valid ||
    !senderEmail.validity.valid ||
    !senderMessage.validity.valid
  ) {
    showError(senderName);
    showError(senderEmail);
    showError(senderMessage);
  } else {
    sendEmail(senderName.value, senderEmail.value, senderMessage.value);
    form.reset();
    return false;
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

function sendEmail(name, email, body) {
  Email.send({
    SecureToken: "8d0cf874-be82-4868-bc83-08c4853b9f22",
    To: "abrhamaraya007@gmail.com",
    From: email,
    Subject: `Message From Profolio Page Made By ${name}`,
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success",
      });
    }
  });
}
