const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/your-backend-endpoint', (req, res) => {
    const { username, password } = req.body;

    // Check credentials (replace with your authentication logic)
    if (username === 'your_username' && password === 'your_password') {
        // Successful login
        res.json({ success: true, message: 'Login successful' });
    } else {
        // Failed login
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});