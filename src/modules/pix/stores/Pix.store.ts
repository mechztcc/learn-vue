import { defineStore } from 'pinia';

export const usePixStore = defineStore('pix', {
  state: () => {
    return {
      data: {
        value: 1,
      },
    };
  },

  actions: {},

  getters: {},
});
