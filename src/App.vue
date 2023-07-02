<template>
  <div class="global-wrapper">
    <notifications />
    <Sidebar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Sidebar from './modules/shared/components/Sidebar.vue';
export default {
  name: 'app-vue',
  components: {
    Sidebar,
  },
};
</script>
