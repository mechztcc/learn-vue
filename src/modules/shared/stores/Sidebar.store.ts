// stores/counter.js
import { defineStore } from 'pinia';
import { hasSession } from '../services/LocalStorageService';
import { log } from 'node:console';

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      isOpened: true,
      hasToken: hasSession(),
      items: [
        {
          name: 'Início',
          isActive: true,
          icon: 'mdi-home-variant',
          url: 'home',
        },
        {
          name: 'Cartões',
          isActive: false,
          icon: 'mdi-credit-card',
          url: 'my-cards',
        },
        {
          name: 'Pix',
          isActive: false,
          icon: 'mdi-currency-usd',
          url: 'pix-area',
        },
        {
          name: 'Configurações',
          isActive: false,
          icon: 'mdi-cog',
          url: 'settings',
        },
        {
          name: 'Sair',
          isActive: false,
          icon: 'mdi-location-exit',
          url: 'login',
        },
      ],
    };
  },

  actions: {
    onActiveItem(index: number) {
      this.items.map((item) => {
        item.isActive = false;
      });
      this.items[index].isActive = true;
    },

    onHandleSize() {
      this.isOpened = !this.isOpened;
    },

    onFindToken() {
      this.hasToken = hasSession();
    },
  },
});
