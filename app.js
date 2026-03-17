// app.js

// Example: Scroll naar de sectie 'offer' wanneer de knop wordt geklikt
document.querySelector('a[href="#offer"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#offer').scrollIntoView({ behavior: 'smooth' });
});

// Example: Maak een knop klikbaar (bijvoorbeeld voor toekomstige functies)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Button clicked:', btn.textContent);
        // Hier kun je meer functionaliteit toevoegen
    });
});
