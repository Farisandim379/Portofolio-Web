// backend/data.js

const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'MAN 1 Salatiga', major: 'MIPA' },
  { id: 2, period: '2016 - 2019', institution: 'Mts Sudirman Getasan', major: '9 A' },
  { id: 2, period: '2010 - 2016', institution: 'SD Negeri Kopeng 1', major: '' }
];
const profileData = {
  name: 'Faris Andi Muhammad',
  tagline: 'Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.',
  // Menggunakan pola URL gambar lokal yang sudah kita buat
  profileImage: 'http://localhost:3000/images/foto-profile.jpg' 
};
const skills = [
  { name: 'react.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Express.js', level: 'Menengah' },
  { name: 'PostgreSQL', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
];

const projects = [
  {
    title: 'Website Toko Online',
    // === PERUBAHAN DI SINI ===
    // Mengarah ke server backend Anda di folder public/images
    image: 'http://localhost:3000/images/e-commerce.jpg', 
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    // === DAN PERUBAHAN DI SINI ===
    image: 'http://localhost:3000/images/managements.jpg',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

// Biarkan module.exports seperti ini, sudah benar.
module.exports = { profileData,educationHistory, skills, projects, };