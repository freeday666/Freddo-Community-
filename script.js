<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <title>Discord Panel</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .panel {
      background: #1e293b;
      padding: 20px;
      border-radius: 12px;
      width: 350px;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 6px;
      border: none;
    }
    button {
      padding: 10px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-right: 5px;
    }
    .start { background: #22c55e; }
    .stop { background: #ef4444; }
    .status { margin-top: 10px; }
  </style>
</head>
<body>
  <div class="panel">
    <h2>Discord Panel</h2>
    <input type="password" id="token" placeholder="Plak je token hier">
    <div>
      <button class="start" onclick="startBot()">Start</button>
      <button class="stop" onclick="stopBot()">Stop</button>
    </div>
    <div class="status" id="status">Status: Offline</div>
  </div>

  <script src="script.js"></script>
</body>
</html>

/* ================= script.js ================= */

let runningBots = 0;
const maxBots = 6;

function startBot() {
  const token = document.getElementById('token').value;

  if (!token) {
    alert('Token nodig!');
    return;
  }

  if (runningBots >= maxBots) {
    alert('Max 6 bots bereikt!');
    return;
  }

  runningBots++;
  updateStatus();

  console.log('Start bot:', token);
}

function stopBot() {
  if (runningBots <= 0) {
    alert('Geen bots actief!');
    return;
  }

  runningBots--;
  updateStatus();
}

function updateStatus() {
  const status = document.getElementById('status');

  if (runningBots === 0) {
    status.innerText = 'Status: Offline';
  } else {
    status.innerText = `Status: ${runningBots} online (max 6)`;
  }
}
