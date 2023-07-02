<template>
  <div>Home page</div>
  <v-btn color="success" @click="store.onHandleSize()">text</v-btn>
</template>
<script>
import { useSidebarStore } from '../../shared/stores/Sidebar.store';

export default {
  name: 'home-layout',
  data() {
    return {
      store: useSidebarStore(),
    };
  },
  methods: {},
};
</script>
<style lang="ts"></style>
