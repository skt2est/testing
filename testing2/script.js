function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can perform validation here before sending data to the server

    // Send the data to the server using AJAX (or fetch API)
    // Example using fetch:
    fetch('/your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}