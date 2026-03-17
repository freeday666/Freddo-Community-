// Replit / Node.js backend voorbeeld
const express = require('express');
const app = express();
app.use(express.json());

let botToken = '';
let botRunning = false;

// Dummy command storage
let commands = {
  checkcheater: false,
  autoMod: false,
  // voeg meer commands toe
};

app.post('/start', (req, res) => {
  botToken = req.body.token;
  // Hier zou je je Discord bot starten met de token
  botRunning = true;
  res.json({ message: 'Bot gestart' });
});

app.post('/stop', (req, res) => {
  // Hier zou je je Discord bot stoppen
  botRunning = false;
  res.json({ message: 'Bot gestopt' });
});

app.post('/setcommand', (req, res) => {
  const { command, value } = req.body;
  commands[command] = value;
  res.json({ message: `Command ${command} aangepast` });
});

app.get('/status', (req, res) => {
  res.json({ botRunning, commands });
});

app.listen(3000, () => console.log('Backend draait op port 3000'));
