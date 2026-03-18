// VERVANG DIT door de URL van je bot server (bijv: https://freeday666.github.io/Freddo-Community-/)
const API_URL = "https://freeday666.github.io/Freddo-Community-/"; 

async function fetchStats() {
    try {
        const response = await fetch(`${API_URL}/stats`);
        const data = await response.json();

        // Update de HTML velden met data van de bot
        document.getElementById('bot-tag').innerText = data.username;
        document.getElementById('bot-status').innerText = data.status;
        document.getElementById('server-count').innerText = data.servers;
        document.getElementById('bot-ping').innerText = data.ping;
        
        // Update status lampje
        document.getElementById('status-indicator').classList.add('status-online');
    } catch (error) {
        console.error("Fout bij ophalen stats:", error);
        document.getElementById('bot-status').innerText = "Offline";
        document.getElementById('status-indicator').classList.remove('status-online');
    }
}

async function sendCommand(type) {
    if(!confirm(`Weet je zeker dat je actie '${type}' wilt uitvoeren?`)) return;

    try {
        const response = await fetch(`${API_URL}/control?command=${type}`);
        const result = await response.json();
        alert("Server zegt: " + result.message);
    } catch (error) {
        alert("Fout bij verbinden met de bot server.");
    }
}

// Elke 5 seconden de stats verversen
setInterval(fetchStats, 5000);

// Meteen laden bij openen pagina
fetchStats();
