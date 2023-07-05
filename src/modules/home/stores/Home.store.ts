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
    onAddInfo(balance: number) {
      this.info.balance = balance;
    },

    onAddBalance(value: number) {
      this.info.balance = value;
    },
  },

  getters: {},
});
