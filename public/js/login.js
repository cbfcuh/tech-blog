const loginFormHandler = async function(event) {
    event.preventDefault();

    // Get the username and password from the form inputs 
    const usernameEl = document.querySelector('#username-login').value.trim();
    const passwordEl = document.querySelector('#password-login').value.trim();

    // Check if both username and password fields are filled
    if (usernameEl && passwordEl) {
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username: usernameEl, password: passwordEl }), 
            headers: { 'Content-Type': 'application/json' }, 
        });

        // If login is successful redirect to the homepage
        if (response.ok) {
            document.location.replace('/');
        } else {
            // If login fails display alert with the error message
            alert(response.statusText);
        }
    }
};

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);
