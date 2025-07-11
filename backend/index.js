const express = require('express');
const cors = require('cors');

// Path diperbaiki untuk menunjuk ke folder backend dan mengambil semua data
const { profileData, educationHistory, skills, projects } = require('../backend/data.js');

const app = express();
app.use(cors());

// Endpoint BARU untuk data profil
app.get('/api/profile', (req, res) => {
  // Pastikan profileData ada sebelum mengirim
  if (profileData) {
    res.json(profileData);
  } else {
    res.status(404).json({ message: "Profile data not found" });
  }
});

// Endpoint untuk mendapatkan data pendidikan
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

// Endpoint untuk mendapatkan data skill
app.get('/api/skills', (req, res) => {
  res.json(skills);
});

// Endpoint untuk mendapatkan data proyek
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Baris ini penting agar Vercel bisa menjalankan backend Anda sebagai serverless function
module.exports = app;
