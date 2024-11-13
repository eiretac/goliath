document.getElementById('subscribe-button').addEventListener('click', function() {
    const email = document.getElementById('user-email').value;
    if (!email) {
        alert("Please enter your email address!");
        return;
    }

    // Gather selected newsletters
    const selectedNewsletters = [];
    const checkboxes = document.querySelectorAll('.newsletter:checked');
    checkboxes.forEach(checkbox => {
        selectedNewsletters.push(checkbox.getAttribute('data-newsletter'));
    });

    if (selectedNewsletters.length === 0) {
        alert("Please select at least one newsletter!");
        return;
    }

    // Simulate subscription process
    console.log("Subscribing to newsletters: ", selectedNewsletters);

    // In a real-world scenario, here you'd send the email to your server to process the subscriptions

    // Show confirmation message
    document.querySelector('#confirmation').style.display = 'block';
});
