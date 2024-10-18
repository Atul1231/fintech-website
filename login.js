document.getElementById("show-signup").addEventListener("click", function (event) {
    event.preventDefault();
    showSignupForm();
});

document.getElementById("show-login").addEventListener("click", function (event) {
    event.preventDefault();
    showLoginForm();
});

function showSignupForm() {
    const authContainer = document.querySelector('.auth-container');
    authContainer.classList.add('scaling');
    setTimeout(() => {
        document.getElementById('login-container').classList.remove('active');
        document.getElementById('signup-container').classList.add('active');
        authContainer.classList.remove('scaling');
    }, 300);
}

function showLoginForm() {
    const authContainer = document.querySelector('.auth-container');
    authContainer.classList.add('scaling');
    setTimeout(() => {
        document.getElementById('signup-container').classList.remove('active');
        document.getElementById('login-container').classList.add('active');
        authContainer.classList.remove('scaling');
    }, 300);
}

// Validation for the Login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

// Validation for the Signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (!validateSignupForm()) {
        event.preventDefault();  // Prevent form submission if validation fails
    }
});

function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Regular expression for validating email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        return false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Password validation: minimum 8 characters, at least one letter and one number
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        return false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    return true;
}

function validateSignupForm() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Regular expression for validating email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('signup-email-error').textContent = 'Please enter a valid email address.';
        return false;
    } else {
        document.getElementById('signup-email-error').textContent = '';
    }

    // Password validation: minimum 8 characters, at least one letter and one number
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('signup-password-error').textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        return false;
    } else {
        document.getElementById('signup-password-error').textContent = '';
    }

    return true;
}
