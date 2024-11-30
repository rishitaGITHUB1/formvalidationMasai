// Function to validate the name field
function validateName() {
    const nameField = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameField.value.trim() === '') {
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

// Function to validate the email field
function validateEmail() {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

// Function to validate the password field
function validatePassword() {
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (passwordField.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

// Event listener for real-time validation
document.addEventListener('DOMContentLoaded', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const form = document.getElementById('registration-form');

    // Attach input and blur event listeners for real-time validation
    nameField.addEventListener('input', validateName);
    nameField.addEventListener('blur', validateName);

    emailField.addEventListener('input', validateEmail);
    emailField.addEventListener('blur', validateEmail);

    passwordField.addEventListener('input', validatePassword);
    passwordField.addEventListener('blur', validatePassword);

    // Prevent form submission if there are validation errors
    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        const nameErrorVisible = document.getElementById('name-error').style.display === 'block';
        const emailErrorVisible = document.getElementById('email-error').style.display === 'block';
        const passwordErrorVisible = document.getElementById('password-error').style.display === 'block';

        if (nameErrorVisible || emailErrorVisible || passwordErrorVisible) {
            event.preventDefault(); // Prevent form submission
            alert('Please fix the errors before submitting the form.');
        }
    });
});
