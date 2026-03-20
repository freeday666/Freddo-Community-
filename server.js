const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8080;

// Map voor uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Storage configuratie voor Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// Serve static bestanden
app.use('/games', express.static(uploadDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint om game te uploaden
app.post('/upload', upload.single('gamefile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Geen bestand geüpload');
    }
    res.json({ message: 'Game geüpload', filename: req.file.filename });
});

// API endpoint om lijst van games op te halen
app.get('/games', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).send('Fout bij lezen directory');
        res.json(files);
    });
});

app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});