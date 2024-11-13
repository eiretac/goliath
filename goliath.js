// Countdown Timer and Launch Mechanism
let countdownTime = 300; // 5 minutes
let launchCode = "GOLIATH123"; // Secret Launch Code
let launchButton = document.getElementById("launchButton");
let launchInput = document.getElementById("launchCode");
let statusMessage = document.getElementById("statusMessage");
let countdownDisplay = document.getElementById("countdownTimer");
let launchAudio = document.getElementById("launchAudio"); // Reference to the audio element

function updateCountdown() {
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  countdownDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (countdownTime === 0) {
    clearInterval(countdownInterval);
    launchButton.disabled = false;
    statusMessage.textContent = "Launch successful! Goliath has been deployed!";
  } else {
    countdownTime--;
  }
}

let countdownInterval = setInterval(updateCountdown, 1000);

// Launch button click action
launchButton.addEventListener("click", function () {
  if (launchInput.value === launchCode) {
    statusMessage.textContent = "Launch code accepted! Goliath is on the way!";
    launchButton.disabled = true;

    // Play the launch sound
    launchAudio.play();
  } else {
    statusMessage.textContent = "Incorrect launch code! Try again.";
  }
});

// Update status based on input
launchInput.addEventListener("input", function () {
  if (launchInput.value === launchCode) {
    launchButton.disabled = false;
  } else {
    launchButton.disabled = true;
  }
});
