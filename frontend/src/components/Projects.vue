<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

// Modern color palette yang disamakan dengan skill.vue
const colorPalette = [
  {
    gradient: 'from-violet-600 to-purple-600',
    shadow: 'shadow-violet-500/25',
    hover: 'hover:shadow-violet-500/40',
    corners: { from: 'from-violet-500/10', to: 'from-purple-500/10' }
  },
  {
    gradient: 'from-emerald-600 to-teal-600',
    shadow: 'shadow-emerald-500/25',
    hover: 'hover:shadow-emerald-500/40',
    corners: { from: 'from-emerald-500/10', to: 'from-teal-500/10' }
  },
  {
    gradient: 'from-rose-600 to-pink-600',
    shadow: 'shadow-rose-500/25',
    hover: 'hover:shadow-rose-500/40',
    corners: { from: 'from-rose-500/10', to: 'from-pink-500/10' }
  },
  {
    gradient: 'from-amber-600 to-orange-600',
    shadow: 'shadow-amber-500/25',
    hover: 'hover:shadow-amber-500/40',
    corners: { from: 'from-amber-500/10', to: 'from-orange-500/10' }
  },
  {
    gradient: 'from-blue-600 to-cyan-600',
    shadow: 'shadow-blue-500/25',
    hover: 'hover:shadow-blue-500/40',
    corners: { from: 'from-blue-500/10', to: 'from-cyan-500/10' }
  },
  {
    gradient: 'from-indigo-600 to-purple-600',
    shadow: 'shadow-indigo-500/25',
    hover: 'hover:shadow-indigo-500/40',
    corners: { from: 'from-indigo-500/10', to: 'from-purple-500/10' }
  }
];

const getProjectColor = (index) => {
  return colorPalette[index % colorPalette.length];
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data dari API:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-24 bg-violet-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent)] pointer-events-none"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.05),transparent)] pointer-events-none"></div>

    <div class="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
    <div class="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid lg:grid-cols-2 gap-10 mt-16">
        <div
          v-for="(project, projectIndex) in projects"
          :key="project.title"
          class="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/20 transform hover:scale-[1.02] transition-all duration-700 ease-out"
          :class="[
            getProjectColor(projectIndex).shadow,
            getProjectColor(projectIndex).hover
          ]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
              <span class="text-sm font-black text-gray-800">{{ String(projectIndex + 1).padStart(2, '0') }}</span>
            </div>
            <div class="absolute top-4 left-4 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full">
              <span class="text-xs font-semibold text-white">Featured</span>
            </div>
          </div>

          <div class="relative p-8">
            <div class="mb-4">
              <h3 class="text-2xl font-black text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <div
                class="w-12 h-1 bg-gradient-to-r rounded-full transform group-hover:w-20 transition-all duration-500"
                :class="getProjectColor(projectIndex).gradient"
              ></div>
            </div>

            <p class="text-gray-600 mb-6 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(tech, techIndex) in project.tech"
                  :key="tech"
                  class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer bg-gradient-to-r"
                  :class="getProjectColor(techIndex).gradient"
                >
                  <span class="w-2 h-2 bg-white/30 rounded-full mr-2"></span>
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                :class="getProjectColor(projectIndex).gradient"
              >
                <span class="mr-2">Lihat Detail</span>
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>

              <button class="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br to-transparent rounded-br-3xl"
            :class="getProjectColor(projectIndex).corners.from"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl to-transparent rounded-tl-3xl"
            :class="getProjectColor(projectIndex).corners.to"
          ></div>
        </div>
      </div>

      <div class="text-center mt-16">
        <button class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          <span class="mr-2">Lihat Semua Proyek</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      <div class="mt-20 flex justify-center">
        <div class="w-32 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float.delay-1000 {
  animation-delay: 1s;
}

/* Line clamp utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
