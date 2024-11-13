// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('loginForm'); // The login form element
  const errorMessage = document.getElementById('errorMessage'); // Error message div
  const usernameField = document.getElementById('username'); // Username input field
  const passwordField = document.getElementById('password'); // Password input field
  
  // Hardcoded credentials for simulation (username and password)
  const correctUsername = "jew";
  const correctPassword = "money";
  
  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Retrieve entered username and password
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;
    
    // Check if the entered credentials match the hardcoded ones
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      // If credentials are correct, redirect to the email newsletter page
      alert('Login successful!');
      window.location.href = 'email_newsletter.html'; // Replace this with the actual destination URL
    } else {
      // If credentials are incorrect, show the error message with a glitch effect
      errorMessage.style.display = 'block'; // Make the error message visible
      setTimeout(() => {
        // After a short delay, hide the error message (you can adjust the timing)
        errorMessage.style.display = 'none';
      }, 3000); // Hide after 3 seconds
    }
  });

  // Optional: Add some interaction effects for glitching when input fields are focused
  usernameField.addEventListener('focus', function() {
    usernameField.classList.add('glitch-effect');
  });
  usernameField.addEventListener('blur', function() {
    usernameField.classList.remove('glitch-effect');
  });

  passwordField.addEventListener('focus', function() {
    passwordField.classList.add('glitch-effect');
  });
  passwordField.addEventListener('blur', function() {
    passwordField.classList.remove('glitch-effect');
  });

});
