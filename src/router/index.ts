// Composables
import { hasSession } from '@/modules/shared/services/LocalStorageService';
import { createRouter, createWebHistory } from 'vue-router';
import { useSidebarStore } from '../modules/shared/stores/Sidebar.store';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/modules/users/layouts/LoginLayout.vue'),
  },
  {
    path: '/create-account',
    name: 'signup',
    component: () => import('@/modules/users/layouts/CreateAccountLayout.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/home/layouts/HomeLayout.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useSidebarStore();
  const token = hasSession();

  if (!token && to.path !== '/login') {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
