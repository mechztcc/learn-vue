/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import Notifications, { notify } from '@kyvg/vue3-notification';
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from '@/plugins';
import axios from 'axios';

const app = createApp(App);
app.use(Notifications);

registerPlugins(app);

app.mount('#app');

axios.interceptors.request.use((data) => {
  const token = localStorage.getItem('token');
  if (token) {
    data.headers.Authorization = token;
  }
  return data;
});

axios.interceptors.response.use(
  (response) => {
    notify({
      type: 'success',
      text: 'Success request',
      title: 'Success',
    });

    return response.data;
  },
  (error) => {
    notify({
      type: 'warn',
      text: error.response.data.message,
      title: 'Error',
    });
  }
);
