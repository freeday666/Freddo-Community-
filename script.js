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