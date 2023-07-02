// stores/counter.js
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => {
    return {
      items: [
        {
          name: 'Início',
          isActive: false,
          icon: 'mdi-home-variant',
          url: '',
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
  },
});
