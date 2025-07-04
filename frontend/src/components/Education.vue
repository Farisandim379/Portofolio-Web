<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

// Enhanced color palette with more vibrant gradients
const colorPalette = [
  {
    gradient: 'from-violet-600 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
    iconColor: 'text-violet-600',
    accentColor: 'violet-500'
  },
  {
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    iconColor: 'text-emerald-600',
    accentColor: 'emerald-500'
  },
  {
    gradient: 'from-rose-600 to-pink-600',
    bgGradient: 'from-rose-50 to-pink-50',
    iconColor: 'text-rose-600',
    accentColor: 'rose-500'
  },
  {
    gradient: 'from-amber-600 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    iconColor: 'text-amber-600',
    accentColor: 'amber-500'
  },
  {
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
    accentColor: 'blue-500'
  },
  {
    gradient: 'from-indigo-600 to-purple-600',
    bgGradient: 'from-indigo-50 to-purple-50',
    iconColor: 'text-indigo-600',
    accentColor: 'indigo-500'
  }
];

const getTimelineColor = (index) => {
  return colorPalette[index % colorPalette.length];
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan dari API:', error);
    // Fallback data for demo
    educationHistory.value = [
      {
        id: 1,
        period: "2023 - Sekarang",
        institution: "Universitas Amikom Yogyakarta",
        major: "S1 - Informatika",
        level: "university"
      },
      {
        id: 2,
        period: "2019 - 2022",
        institution: "MAN 1 Salatiga",
        major: "MIPA",
        level: "high-school"
      },
      {
        id: 3,
        period: "2016 - 2019",
        institution: "Mts Sudirman Getasan",
        major: "9 A",
        level: "junior-high"
      },
      {
        id: 4,
        period: "2010 - 2016",
        institution: "SD Negeri Kopeng 1",
        major: "",
        level: "elementary"
      }
    ];
  }
});

const getEducationIcon = (level) => {
  switch(level) {
    case 'university':
      return '🎓';
    case 'high-school':
      return '🏫';
    case 'junior-high':
      return '🏛️';
    case 'elementary':
      return '🏫';
    default:
      return '📚';
  }
};
</script>

<template>
  <section id="pendidikan" class="py-32 bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 relative overflow-hidden">
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
          Perjalanan Akademik
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-gray-800 mb-4">
          Riwayat
          <span class="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Pendidikan
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Perjalanan pembelajaran yang membentuk fondasi pengetahuan dan keterampilan
        </p>
      </div>

      <!-- Modern Timeline Design -->
      <div class="relative max-w-6xl mx-auto">
        <!-- Central timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-200 via-purple-200 to-pink-200 rounded-full hidden md:block"></div>

        <!-- Mobile timeline line -->
        <div class="absolute left-8 w-1 h-full bg-gradient-to-b from-violet-200 via-purple-200 to-pink-200 rounded-full md:hidden"></div>

        <div class="space-y-16">
          <div
            v-for="(edu, index) in educationHistory"
            :key="edu.id"
            class="relative"
            :class="[
              'animate-fade-in-up',
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            ]"
            :style="{ 'animation-delay': `${index * 200}ms` }"
          >
            <!-- Desktop Layout -->
            <div class="hidden md:flex items-center" :class="[index % 2 === 0 ? 'flex-row-reverse' : '']">
              <!-- Content Card -->
              <div class="w-5/12 group">
                <div class="relative">
                  <!-- Glow effect -->
                  <div class="absolute -inset-1 bg-gradient-to-r opacity-25 rounded-3xl blur-lg transition-all duration-300 group-hover:opacity-40" :class="getTimelineColor(index).gradient"></div>

                  <!-- Main card -->
                  <div class="relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">
                    <!-- Period badge -->
                    <div class="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white mb-4 bg-gradient-to-r" :class="getTimelineColor(index).gradient">
                      <span class="text-lg mr-2">{{ getEducationIcon(edu.level) }}</span>
                      {{ edu.period }}
                    </div>

                    <!-- Institution name -->
                    <h3 class="text-2xl font-bold text-gray-800 mb-2">
                      {{ edu.institution }}
                    </h3>

                    <!-- Major -->
                    <p class="text-gray-600 text-lg font-medium" v-if="edu.major">
                      {{ edu.major }}
                    </p>

                    <!-- Decorative accent -->
                    <div class="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br opacity-60" :class="getTimelineColor(index).gradient"></div>
                  </div>
                </div>
              </div>

              <!-- Central Timeline Node -->
              <div class="flex-1 flex justify-center">
                <div class="relative">
                  <!-- Outer ring -->
                  <div class="w-16 h-16 rounded-full bg-gradient-to-br border-4 border-white shadow-xl flex items-center justify-center" :class="getTimelineColor(index).gradient">
                    <!-- Inner content -->
                    <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <div class="w-3 h-3 rounded-full bg-gradient-to-br" :class="getTimelineColor(index).gradient"></div>
                    </div>
                  </div>

                  <!-- Connecting lines -->
                  <div class="absolute top-1/2 w-12 h-0.5 bg-gradient-to-r" :class="[
                    getTimelineColor(index).gradient,
                    index % 2 === 0 ? 'right-16' : 'left-16'
                  ]"></div>
                </div>
              </div>

              <!-- Empty space for alternating layout -->
              <div class="w-5/12"></div>
            </div>

            <!-- Mobile Layout -->
            <div class="md:hidden flex items-start space-x-6">
              <!-- Timeline node -->
              <div class="flex-shrink-0 relative">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br border-4 border-white shadow-lg flex items-center justify-center" :class="getTimelineColor(index).gradient">
                  <div class="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                    <div class="w-2 h-2 rounded-full bg-gradient-to-br" :class="getTimelineColor(index).gradient"></div>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="flex-1 group">
                <div class="relative">
                  <!-- Glow effect -->
                  <div class="absolute -inset-1 bg-gradient-to-r opacity-25 rounded-2xl blur-lg transition-all duration-300 group-hover:opacity-40" :class="getTimelineColor(index).gradient"></div>

                  <!-- Main card -->
                  <div class="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/30">
                    <!-- Period badge -->
                    <div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r" :class="getTimelineColor(index).gradient">
                      <span class="text-sm mr-1">{{ getEducationIcon(edu.level) }}</span>
                      {{ edu.period }}
                    </div>

                    <!-- Institution name -->
                    <h3 class="text-xl font-bold text-gray-800 mb-1">
                      {{ edu.institution }}
                    </h3>

                    <!-- Major -->
                    <p class="text-gray-600 font-medium" v-if="edu.major">
                      {{ edu.major }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

<style scoped>
/* Enhanced animations */
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

/* Custom scrollbar for better aesthetics */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #9333ea);
}
</style>
