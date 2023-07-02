<template>
  <notifications />

  <Sidebar />
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
