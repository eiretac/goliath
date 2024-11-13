// Execute command entered in the console
function executeCommand() {
  const commandInput = document.getElementById('consoleInput').value;
  const commandOutput = document.getElementById('commandOutput');
  
  if (commandInput.toLowerCase() === 'start.mission("phase-1")') {
    commandOutput.textContent = 'Mission Phase 1: Activated. Proceed with caution...';
  } else {
    commandOutput.textContent = 'Unknown command. Please try again.';
  }
}

// Countdown Timer (for mission urgency)
let countdownElement = document.querySelector('.countdown');
let countdownTime = 332; // in seconds (5 minutes 32 seconds)

function updateCountdown() {
  if (countdownTime <= 0) {
    countdownElement.textContent = 'Time expired!';
  } else {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    countdownTime--;
  }
}

setInterval(updateCountdown, 1000);

// Change Agent Level on Page Load
document.addEventListener("DOMContentLoaded", () => {
  let agentLevel = document.querySelector(".level");
  agentLevel.textContent = 4; // Set to the current level (can be dynamically set based on login or other criteria)
});

// Trigger popup when certain actions occur
function triggerPopup(message) {
  const popupMessage = document.getElementById('popup-message');
  popupMessage.textContent = message;  // Set the message dynamically
  document.getElementById('security-popup').style.display = 'flex';  // Show the popup
}

// Close the popup
function closePopup() {
  document.getElementById('security-popup').style.display = 'none';  // Hide the popup
}

// This is just an example of using it in the mission update section.
// You can implement it for any action you want to be restricted.
function executeCommand() {
  const commandInput = document.getElementById('consoleInput').value;
  if (commandInput.trim() === '') {
    triggerPopup('שגיאה: הקלד פקודה חוקית');  // Error: Enter a valid command
  } else {
    // Handle command execution here
    console.log('Executing command:', commandInput);
  }
}
