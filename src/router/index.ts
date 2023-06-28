// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('@/modules/users/layouts/LoginLayout.vue'),
  },
  {
    path: '/create-account',
    component: () => import('@/modules/users/layouts/CreateAccountLayout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
