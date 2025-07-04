<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

// Warna palette yang lebih subtle dan modern
const colorPalette = [
  {
    gradient: 'from-violet-500 to-purple-500',
    shadow: 'shadow-violet-200/30',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600'
  },
  {
    gradient: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-200/30',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600'
  },
  {
    gradient: 'from-rose-500 to-pink-500',
    shadow: 'shadow-rose-200/30',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600'
  },
  {
    gradient: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-200/30',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600'
  },
  {
    gradient: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-200/30',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    gradient: 'from-indigo-500 to-purple-500',
    shadow: 'shadow-indigo-200/30',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  }
];

const getSkillColor = (index) => {
  return colorPalette[index % colorPalette.length];
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data skills dari API:', error);
  }
});
</script>

<template>
  <section id="skill" class="py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Enhanced background decorations -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-purple-400/10 rounded-full blur-2xl animate-float"></div>
    <div class="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-2xl blur-xl animate-float-delayed"></div>
    <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-blue-400/12 to-cyan-400/12 rounded-3xl blur-xl animate-float"></div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Enhanced Section Title -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-violet-700 border border-violet-200/50 mb-6">
          <span class="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
          Teknologi & Keahlian
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          <span class="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Keahlian
          </span>
          & Teknologi
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Kumpulan teknologi dan keahlian yang telah dikuasai dalam perjalanan pengembangan
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="group relative"
        >
          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-r opacity-25 rounded-2xl blur-lg transition-all duration-300 group-hover:opacity-40" :class="getSkillColor(index).gradient"></div>

          <!-- Main card -->
          <div class="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/30 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 cursor-pointer">
            <div class="relative z-10">
              <!-- Icon container -->
              <div
                class="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500"
                :class="[
                  getSkillColor(index).iconBg,
                  getSkillColor(index).iconColor
                ]"
              >
                <div class="w-6 h-6 rounded-md bg-current opacity-80"></div>
              </div>

              <h3 class="text-lg font-semibold text-gray-800 text-center mb-3 group-hover:text-gray-900 transition-colors duration-300">
                {{ skill.name }}
              </h3>

              <div class="text-center mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-all duration-300">
                  {{ skill.level }}
                </span>
              </div>

              <!-- Progress bar -->
              <div class="bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div
                  class="h-full bg-gradient-to-r transition-all duration-700 ease-out"
                  :class="getSkillColor(index).gradient"
                  :style="{ width: getProgressWidth(skill.level) }"
                ></div>
              </div>
            </div>

            <!-- Decorative circle accent -->
            <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br opacity-70" :class="getSkillColor(index).gradient"></div>
          </div>
        </div>
      </div>

      <!-- Bottom decoration -->
      <div class="mt-20 flex justify-center">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"></div>
          <div class="w-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <div class="w-2 h-1 bg-pink-500 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getProgressWidth(level) {
      const levels = {
        'Beginner': '25%',
        'Intermediate': '50%',
        'Advanced': '75%',
        'Expert': '100%'
      };
      return levels[level] || '50%';
    }
  }
}
</script>

<style scoped>
/* Enhanced animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 6s ease-in-out infinite;
  animation-delay: 2s;
}
</style>
