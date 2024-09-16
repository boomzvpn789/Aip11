document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            messageElement.style.color = 'green';
            messageElement.textContent = 'Login successful!';
            localStorage.setItem('token', data.token);
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = data.error || 'Login failed'; ze
        }
    } catch (error) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'An error occurred';
    }
});
