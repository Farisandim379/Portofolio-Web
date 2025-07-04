<script setup>
import { ref, onMounted } from 'vue';

// State untuk menu mobile dan link aktif
const isMenuOpen = ref(false);
const activeSection = ref('profil');

// Daftar link untuk menghindari repetisi di template dan mempermudah looping
const navLinks = [
  { id: 'profil', text: 'Profil', href: '#profil' },
  { id: 'pendidikan', text: 'Pendidikan', href: '#pendidikan' },
  { id: 'skill', text: 'Skill', href: '#skill' },
  { id: 'proyek', text: 'Proyek', href: '#proyek' },
  { id: 'kontak', text: 'Kontak', href: '#kontak' },
];

// Fungsi untuk menangani klik link di menu mobile
const handleMobileLinkClick = () => {
  isMenuOpen.value = false;
};

// onMounted untuk menambahkan event listener saat komponen dimuat
onMounted(() => {
  const sections = navLinks.map(link => document.getElementById(link.id));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px' // Menentukan section aktif saat berada di tengah viewport
  });

  sections.forEach(section => {
    if (section) {
      observer.observe(section);
    }
  });
});
</script>

<template>
  <header class="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#profil" class="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
        Faris Andi M
      </a>

      <ul class="hidden md:flex items-center space-x-2 font-medium">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="px-4 py-2 rounded-full transition-all duration-300"
            :class="{
              'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md': activeSection === link.id,
              'text-gray-600 hover:bg-violet-100/60': activeSection !== link.id
            }"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>

      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-gray-800 focus:outline-none p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>

    <div
      class="md:hidden overflow-hidden transition-all duration-300 ease-out"
      :class="isMenuOpen ? 'max-h-96' : 'max-h-0'"
    >
      <ul class="flex flex-col items-center px-4 pt-2 pb-4 space-y-2 bg-white/90">
        <li v-for="link in navLinks" :key="link.id" class="w-full">
          <a
            :href="link.href"
            @click="handleMobileLinkClick"
            class="block text-center w-full px-4 py-3 rounded-lg transition-all duration-300"
            :class="{
              'bg-violet-500 text-white': activeSection === link.id,
              'text-gray-600 hover:bg-violet-100': activeSection !== link.id
            }"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
/* Optional: Menambahkan sedikit style untuk scroll-behavior yang lebih halus */
html {
  scroll-behavior: smooth;
}
</style>
