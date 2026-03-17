document.getElementById('statusButton').addEventListener('click', () => {
    fetch('https://jouwdomein.com/api/status') // Vervang door je API URL
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = data.message;
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Fout bij ophalen: ' + error;
        });
});
