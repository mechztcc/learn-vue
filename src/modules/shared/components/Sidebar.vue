<template lang="">
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover rail>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sandra Adams"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="(item, index) in store.items"
            :key="index"
            :prepend-icon="item.icon"
            :title="item.name"
            :value="index"
            @click="onNavigate(item.url)"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="main"> <router-view /></v-main>
    </v-layout>
  </v-card>
</template>
<script lang="ts">
import { useSidebarStore } from '../stores/Sidebar.store';

export default {
  name: 'sidebar',
  data() {
    return {
      store: useSidebarStore(),
    };
  },
  methods: {
    onNavigate(url: string) {
      this.$router.push(`/${url}`);
    },
  },
};
</script>
<style lang="scss">
.main {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
