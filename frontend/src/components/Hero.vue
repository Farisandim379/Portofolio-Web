<script setup>
// Mengimpor 'ref' untuk membuat variabel reaktif dan 'onMounted' untuk menjalankan kode saat komponen dimuat.
import { ref, onMounted } from 'vue';
import axios from 'axios'; // Menggunakan axios untuk konsistensi dengan komponen lain

// Membuat variabel reaktif 'profile' untuk menyimpan data yang akan datang dari backend.
const profile = ref({
  name: 'Memuat...',
  tagline: 'Mengambil data dari server...',
  profileImage: '' // Bisa diisi URL gambar placeholder jika perlu
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/profile');
    profile.value = response.data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data profil:', error);
    profile.value.name = 'Gagal Memuat';
    profile.value.tagline = 'Tidak dapat terhubung ke server. Silakan coba lagi nanti.';
    profile.value.profileImage = '/images/default-avatar.png'; // Set gambar default jika fetch gagal
  }
});
</script>

<template>
  <section id="profil" class="relative bg-violet-50 min-h-screen flex items-center overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-2xl animate-float"></div>
    <div class="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-2xl blur-xl animate-float-delayed"></div>
    <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-3xl blur-xl animate-float"></div>

    <div class="container mx-auto px-6 py-20 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <div class="space-y-6">
              <div class="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-violet-700 border border-violet-200/50 animate-fade-in-up" style="animation-delay: 100ms;">
                <span class="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
                Tersedia untuk Kolaborasi
              </div>

              <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 leading-tight animate-fade-in-up" style="animation-delay: 200ms;">
                Halo, Saya
                <span class="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  {{ profile.name }}
                </span>
              </h1>

              <p class="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up" style="animation-delay: 400ms;">
                {{ profile.tagline }}
              </p>

              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6 animate-fade-in-up" style="animation-delay: 600ms;">
                <a
                  href="#kontak"
                  class="group inline-flex items-center justify-center font-bold rounded-full text-white bg-gradient-to-r from-violet-600 to-purple-600 py-4 px-8 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                >
                  Hubungi Saya
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>

                <a
                  href="#portofolio"
                  class="inline-flex items-center justify-center font-bold rounded-full text-violet-600 bg-white/80 backdrop-blur-sm py-4 px-8 border-2 border-violet-200 hover:bg-white hover:border-violet-300 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Lihat Karya
                </a>
              </div>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="order-1 lg:order-2 flex justify-center animate-fade-in-up" style="animation-delay: 300ms;">
            <div class="relative">
              <!-- Option 1: Rounded Rectangle (Current) -->
              <div class="shape-option-1">
                <!-- Outer glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>

                <!-- Middle decorative ring -->
                <div class="absolute -inset-4 bg-gradient-to-r from-violet-400 to-purple-400 rounded-3xl blur-lg opacity-50 animate-spin-slow"></div>

                <!-- Inner white border -->
                <div class="relative p-2 bg-white rounded-3xl shadow-2xl">
                  <div class="relative overflow-hidden rounded-2xl">
                    <img
                      :src="profile.profileImage"
                      alt="Foto Profil"
                      class="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover hover:scale-110 transition-transform duration-700"
                    >

                    <!-- Overlay gradient on hover -->
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <!-- Option 2: Hexagon Shape (Hidden by default) -->
              <div class="shape-option-2 hidden">
                <!-- Outer glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse-glow hexagon-glow"></div>

                <!-- Inner white border -->
                <div class="relative p-2 bg-white shadow-2xl hexagon-border">
                  <div class="relative overflow-hidden hexagon-image">
                    <img
                      :src="profile.profileImage"
                      alt="Foto Profil"
                      class="w-80 h-80 md:w-96 md:h-96 object-cover hover:scale-110 transition-transform duration-700 hexagon-img"
                    >

                    <!-- Overlay gradient on hover -->
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300 hexagon-overlay"></div>
                  </div>
                </div>
              </div>

              <!-- Option 3: Tilted Rectangle (Hidden by default) -->
              <div class="shape-option-3 hidden">
                <!-- Outer glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow transform rotate-6"></div>

                <!-- Inner white border -->
                <div class="relative p-2 bg-white rounded-3xl shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500">
                  <div class="relative overflow-hidden rounded-2xl">
                    <img
                      :src="profile.profileImage"
                      alt="Foto Profil"
                      class="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover hover:scale-110 transition-transform duration-700"
                    >

                    <!-- Overlay gradient on hover -->
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <!-- Option 4: Soft Rectangle with Large Radius (Hidden by default) -->
              <div class="shape-option-4 hidden">
                <!-- Outer glow effect -->
                <div class="absolute -inset-8 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30 animate-pulse-glow"></div>

                <!-- Inner white border -->
                <div class="relative p-2 bg-white rounded-[3rem] shadow-2xl">
                  <div class="relative overflow-hidden rounded-[2.5rem]">
                    <img
                      :src="profile.profileImage"
                      alt="Foto Profil"
                      class="w-80 h-80 md:w-96 md:h-96 rounded-[2.5rem] object-cover hover:scale-110 transition-transform duration-700"
                    >

                    <!-- Overlay gradient on hover -->
                    <div class="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-[2.5rem] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <!-- Floating accent dots -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full shadow-lg animate-bounce-slow"></div>
              <div class="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg animate-bounce-slow" style="animation-delay: 1s;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animasi Fade In Up yang lebih modern */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Animasi untuk efek glow pada cincin gradien */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

/* Animasi rotasi lambat untuk efek dekoratif */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

/* Animasi floating untuk elemen dekoratif */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}

/* Animasi bounce lambat untuk accent dots */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s ease-in-out infinite;
}
</style>
