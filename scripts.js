document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('loginForm'); // The login form element
  const errorMessage = document.getElementById('errorMessage'); // Error message div
  const usernameField = document.getElementById('username'); // Username input field
  const passwordField = document.getElementById('password'); // Password input field
  
  // Hardcoded credentials for simulation (username and password)
  const correctUsername = "admin";
  const correctPassword = "securepass";

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Retrieve entered username and password
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;

    // Check if the entered credentials match the hardcoded ones
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      // If credentials are correct, redirect to the secure area
      alert('Access granted to the secure area.');
      window.location.href = 'secure_area.html'; // Replace this with the actual destination URL
    } else {
      // If credentials are incorrect, show the error message with a glitch effect
      errorMessage.style.display = 'block'; // Make the error message visible
      errorMessage.classList.add('glitch'); // Add the glitch effect class
      setTimeout(() => {
        // After a short delay, hide the error message (you can adjust the timing)
        errorMessage.style.display = 'none';
        errorMessage.classList.remove('glitch'); // Remove the glitch effect class
      }, 3000); // Hide after 3 seconds
    }
  });
});
