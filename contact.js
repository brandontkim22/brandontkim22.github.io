const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function (e) {
    // Trim input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate Name
  if (name.length < 2) {
    alert("Please enter a valid name (at least 2 characters).");
    e.preventDefault();
    return;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  // Validate Message
  if (message.length < 10) {
    alert("Your message must be at least 10 characters long.");
    e.preventDefault();
    return;
  }

  alert("Thank you for reaching out! Submitting your message now!");
});
