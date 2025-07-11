// 1. Impor semua gambar yang dibutuhkan di sini
import profileImageSrc from '../../frontend/src/assets/images/foto-profile.jpg';
import projectTopupinImg from '../../frontend/src/assets/images/e-commerce.jpg';
import projectManajemenImg from '../../frontend/src/assets/images/managements.jpg';


const educationHistory = [
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'MAN 1 Salatiga', major: 'MIPA' },
  { id: 3, period: '2016 - 2019', institution: 'Mts Sudirman Getasan', major: '9 A' }, // Perbaikan: id harus unik
  { id: 4, period: '2010 - 2016', institution: 'SD Negeri Kopeng 1', major: '' } // Perbaikan: id harus unik
];

const profileData = {
  name: 'Faris Andi Muhammad',
  tagline: 'Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.',
  // 2. Gunakan variabel hasil impor
  profileImage: profileImageSrc
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
    // 2. Gunakan variabel hasil impor
    image: projectTopupinImg,
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    // 2. Gunakan variabel hasil impor
    image: projectManajemenImg,
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];

// Biarkan module.exports seperti ini, sudah benar.
module.exports = { profileData, educationHistory, skills, projects };
