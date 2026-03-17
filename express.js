const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
    // Hier kun je je bot status controleren of een bericht sturen
    res.json({ message: 'De bot draait correct!' });
});

app.listen(3000, () => {
    console.log('API server draait op port 3000');
});
