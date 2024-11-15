document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('loginForm'); // The login form element
  const usernameField = document.getElementById('username'); // Username input field
  const passwordField = document.getElementById('password'); // Password input field
  const logo = document.getElementById('logo'); // Logo element
  const submitButton = document.querySelector('button[type="submit"]'); // Login button
  const errorMessage = document.getElementById('errorMessage'); // Error message div
  
  // Hardcoded credentials for simulation (username and password)
  const correctUsername = "admin";
  const correctPassword = "securepass";
  
  // Initial speed settings for spinning logo
  let rotationSpeed = 2; // Start with slow speed
  let spinInterval; // Interval for spinning logo

  // Handle form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Retrieve entered username and password
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;

    // Hide the login button and start spinning the logo
    submitButton.style.display = 'none'; // Hide the login button
    logo.classList.add('loading-spinner'); // Add the spinning animation class

    // Increase the spinning speed over time
    spinInterval = setInterval(() => {
      rotationSpeed *= 0.9; // Speed up the rotation by decreasing the time
      logo.style.animationDuration = `${rotationSpeed}s`; // Apply the new speed
      
      if (rotationSpeed < 0.2) {
        // If the logo spins fast enough, dislodge it and make it fly
        clearInterval(spinInterval); // Stop the spinning interval
        logo.classList.remove('loading-spinner'); // Remove the spinner class
        logo.classList.add('flying-logo'); // Start the flying animation
      }
    }, 100);

    // Simulate a delay for authentication process
    setTimeout(function() {
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
          // After a short delay, hide the error message
          errorMessage.style.display = 'none';
          errorMessage.classList.remove('glitch'); // Remove the glitch effect class
        }, 3000); // Hide after 3 seconds
      }
    }, 2000); // Simulate a 2-second login process
  });
});
