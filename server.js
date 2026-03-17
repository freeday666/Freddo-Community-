const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // voor het parsen van JSON body

// In-memory data
let data = {
    bot: {
        running: false,
        token: ""
    },
    commands: {
        checkcheater: false,
        autoMod: false
    }
};

// API endpoints

// Get bot status
app.get('/bot', (req, res) => {
    res.json(data.bot);
});

// Update bot status or token
app.patch('/bot', (req, res) => {
    data.bot = { ...data.bot, ...req.body };
    res.json(data.bot);
});

// Get commands status
app.get('/commands', (req, res) => {
    res.json(data.commands);
});

// Update command
app.patch('/commands/:command', (req, res) => {
    const cmd = req.params.command;
    if (data.commands.hasOwnProperty(cmd)) {
        data.commands[cmd] = req.body[cmd];
        res.json({ [cmd]: data.commands[cmd] });
    } else {
        res.status(404).json({ error: 'Command niet gevonden' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`API server draait op http://localhost:${port}`);
});
