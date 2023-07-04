// Composables
import { hasSession } from '@/modules/shared/services/LocalStorageService';
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
  {
    path: '/',
    component: () => import('@/modules/home/layouts/HomeLayout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = hasSession();
  if (!token && to.path !== '/login') {
    next({ path: '/login' });
  } else {
    next();
  }
});

export default router;
