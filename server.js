const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien servieren
app.use(express.static(path.join(__dirname, 'public')));

// Hauptroute
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server starten
app.listen(PORT, () => {
    console.log(`📊 Digitalisierung Bild & Audio Lernkurs läuft auf Port ${PORT}`);
    console.log(`📚 BPI Mödling - GINF`);
});
