// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // tambahkan route lain jika ada
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
