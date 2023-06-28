/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';
import axios from 'axios';

const app = createApp(App);

registerPlugins(app);

app.mount('#app');

axios.interceptors.request.use((data) => {
  const token = localStorage.getItem('token');
  if (token) {
    data.headers.Authorization = token;
  }
  return data;
});

axios.interceptors.response.use((response) => {
  return response.data;
});
