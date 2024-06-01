const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

// Endpoint to get the client's IP address
app.get('/api/get-ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.json({ ip: ip });
});

// Serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
