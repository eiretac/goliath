document.addEventListener("DOMContentLoaded", function () {
  const countdown = document.getElementById("timer");

  let timeLeft = 30; // countdown starts from 30 seconds

  function updateTimer() {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    countdown.innerHTML = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
  }

  setInterval(updateTimer, 1000); // Update the timer every second

  // Create a sound effect
  let audio = new Audio("audio.mp3");
  audio.loop = true;
  audio.play();

  // Handle document buttons
  const docButtons = document.querySelectorAll(".doc-btn");
  docButtons.forEach(button => {
    button.addEventListener("click", function() {
      alert("This document is classified. You have no clearance.");
    });
  });
});

// "Join the Movement" button mock action
function joinMovement() {
  alert("Congratulations! You've joined the New World Order. Your freedom is now gone.");
}
