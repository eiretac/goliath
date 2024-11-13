document.getElementById("launchButton").addEventListener("click", function() {
  document.getElementById("popup").style.display = "flex";
});

document.getElementById("confirmLaunch").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const code = document.getElementById("code").value;

  if (email && code) {
    // Simulate launch action (e.g., send data to the server or start an animation)
    alert(`Launching to ${email} with code: ${code}`);
    document.getElementById("popup").style.display = "none"; // Hide the popup after launch
  } else {
    alert("Please provide both the email and launch code!");
  }
});

document.getElementById("cancelLaunch").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none"; // Hide the popup if canceled
});
