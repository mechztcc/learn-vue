<template>
  <notifications />
  <Sidebar v-if="show" />
  <router-view />
</template>

<script lang="ts">
import Sidebar from './modules/shared/components/Sidebar.vue';
import { hasSession } from './modules/shared/services/LocalStorageService';
export default {
  name: 'app-vue',
  components: {
    Sidebar,
  },
  data() {
    return {
      show: false,
    };
  },

  beforeMount() {
    this.show = hasSession();
  },
};
</script>
