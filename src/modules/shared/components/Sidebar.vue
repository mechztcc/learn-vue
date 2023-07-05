<template v-slot:activator>
  <v-card>
    <v-layout>
      <v-app-bar :elevation="5" color="secondary" v-if="show">
        <v-app-bar-nav-icon variant="text" @click.stop="store.onHandleSize()"></v-app-bar-nav-icon>
        <template v-slot:append>
          <v-btn icon="mdi-bell-remove"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer :elevation="5" v-model="store.isOpened" temporary v-if="show">
        <v-list>
          <v-list-item title="Sandra Adams" subtitle="sandra_a88@gmailcom"></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list density="compact" nav>
          <v-list-item v-for="(item, index) in store.items" :key="index" :prepend-icon="item.icon" :title="item.name" :value="index" @click="onNavigate(item.url)"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="full-size">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import { clear } from '../services/LocalStorageService';
import { hasSession } from '../services/LocalStorageService';
import { useSidebarStore } from '../stores/Sidebar.store';

export default {
  name: 'sidebar',
  data() {
    return {
      store: useSidebarStore(),
      show: hasSession(),
    };
  },

  created() {
    this.show = hasSession();
  },

  watch: {},

  methods: {
    onNavigate(url: string) {
      if (url === 'login') {
        clear();
        window.location.href = '/login';
      }

      if (url === 'pix-area') {
        this.$router.push(`/${url}`);
      }
      if (url === 'home') {
        this.$router.push('/');
      }
    },
  },
};
</script>
<style lang="scss">
.full-size {
  min-height: 100vh;
}
</style>
