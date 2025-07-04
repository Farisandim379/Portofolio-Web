// backend/index.js

const express = require('express');
const cors = require('cors');
const path = require('path'); // <-- TAMBAHKAN INI: Modul untuk mengelola path file
const { educationHistory, skills, projects, profileData } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API Routes
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/profile', (req, res) => res.json(profileData));


app.listen(PORT, () => {
  console.log(` Server backend berjalan di http://localhost:${PORT}`);
});