<template>
  <notifications />
  <router-view />
</template>

<script lang="ts">
import Sidebar from './modules/shared/components/Sidebar.vue';
import { useSidebarStore } from './modules/shared/stores/Sidebar.store';

export default {
  name: 'app-vue',
  components: {
    Sidebar,
  },
  data() {
    return {
      store: useSidebarStore(),
    };
  },

  created() {

  }


};
</script>
