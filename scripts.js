// Function to trigger glitch effect on elements
function triggerGlitchEffect(element) {
  element.classList.add("glitch-effect");

  // Remove the glitch class after the animation completes
  setTimeout(() => {
    element.classList.remove("glitch-effect");
  }, 1500); // Duration of glitch effect
}

// Validate the login form
function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const correctUsername = "jew";
  const correctPassword = "money";

  const errorMessage = document.getElementById("errorMessage");

  // Check if the username and password are correct
  if (username === correctUsername && password === correctPassword) {
    // Redirect to email newsletter page if login is successful
    window.location.href = "newsletter.html";  // Replace with the actual URL
  } else {
    // Trigger glitch effect on error message
    errorMessage.style.display = "block";  // Show error message
    triggerGlitchEffect(errorMessage);

    // Trigger glitch effect on the input fields
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(input => {
      triggerGlitchEffect(input);
    });
  }
}

// Add glitch effect to the login button when hovered
const loginButton = document.querySelector(".login-btn");
loginButton.addEventListener("mouseenter", () => {
  triggerGlitchEffect(loginButton);
});
