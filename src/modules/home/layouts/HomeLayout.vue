<template>
  <Sidebar v-if="store.hasToken" />
</template>
<script lang="ts">
import { useSidebarStore } from '../../shared/stores/Sidebar.store';
import Sidebar from '../../shared/components/Sidebar.vue';

export default {
  name: 'home-layout',
  components: {
    Sidebar,
  },
  data() {
    return {
      store: useSidebarStore(),
    };
  },
  methods: {},
};
</script>
<style lang="ts"></style>
