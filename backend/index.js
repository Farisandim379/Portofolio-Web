// Gambar tidak lagi diimpor. Mereka akan diakses melalui folder /public.

const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'MAN 1 Salatiga', major: 'MIPA' },
  { id: 3, period: '2016 - 2019', institution: 'Mts Sudirman Getasan', major: '9 A' },
  { id: 4, period: '2010 - 2016', institution: 'SD Negeri Kopeng 1', major: '' }
];

const profileData = {
  name: 'Faris Andi Muhammad',
  tagline: 'Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.',
  // Path gambar sekarang menjadi URL relatif ke folder public
  profileImage: '/images/foto-profile.jpg'
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
    title: 'Website Topupin',
    // Path gambar sekarang menjadi URL relatif ke folder public
    image: '/images/e-commerce.jpg',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    // Path gambar sekarang menjadi URL relatif ke folder public
    image: '/images/managements.jpg',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

// Biarkan module.exports seperti ini, sudah benar.
module.exports = { profileData, educationHistory, skills, projects };
