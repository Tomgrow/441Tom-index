// Listen to form submission events
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const comments = document.getElementById('comments').value;

    // Store the student information in a hidden element
    const hiddenData = document.getElementById('hidden-data');
    hiddenData.textContent = JSON.stringify({
        name,
        email,
        phone,
        course,
        comments
    });

    // Show success message
    alert('Registration successful!');

    // Clear the form
    document.getElementById('registration-form').reset();
});

// Initialize on page load
window.onload = function() {
    // Optionally, you can clear the hidden data or do any other initialization here
};