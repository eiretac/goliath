// Countdown Timer
let countdownTime = 332; // Time in seconds (00:05:32)
let countdownElement = document.querySelector('.countdown');

function updateCountdown() {
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  countdownTime--;
  if (countdownTime < 0) countdownTime = 0;
}

setInterval(updateCountdown, 1000);

// Command Execution
function executeCommand() {
  let input = document.getElementById('consoleInput').value.trim();
  let output = document.getElementById('commandOutput');
  let sound = new Audio('error-sound.mp3');
  
  if (input === "mission_complete") {
    output.textContent = "Mission Success. Proceed to Phase 2.";
    output.style.color = "green";
  } else if (input === "fail") {
    output.textContent = "Mission Failed! Secure the data.";
    output.style.color = "red";
    sound.play();
  } else {
    output.textContent = "Invalid Command. Try again.";
    output.style.color = "orange";
    sound.play();
  }
}

// Adding Fake Mission Code for Hidden Easter Egg
function unlockSecretCode() {
  alert("Code Word for Mission: Illuminati!");
}
