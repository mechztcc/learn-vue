<template lang="">
  <v-card>
    <v-layout>
      <v-app-bar :elevation="5" color="secondary">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="store.onHandleSize()"
        ></v-app-bar-nav-icon>
        <template v-slot:append>
          <v-btn icon="mdi-bell-remove"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer :elevation="5" v-model="store.isOpened">
        <v-list>
          <v-list-item
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
      show: false,
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
