// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AdminHomeView from './views/Admin/HomeView.vue';
import CestaView from './views/CestaView.vue';
import PagoView from './views/PagoView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/cesta', component: CestaView  },
  { path: '/pago', component: PagoView  },
  { path: '/admin', component: AdminHomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
