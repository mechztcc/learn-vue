import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
  state: () => {
    return {
      info: {
        accountCode: '',
        balance: 0,
        name: '',
        token: '',
        userId: 0,
      },
    };
  },

  actions: {
    onAddInfo(info: any) {
      this.info = info;
    },
  },

  getters: {},
});
