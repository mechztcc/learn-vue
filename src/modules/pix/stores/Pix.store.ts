import { defineStore } from 'pinia';
import { IHistory } from '../types/History.interface';

export const usePixStore = defineStore('pix', {
  state: () => {
    return {
      data: {
        history: [] as IHistory[],
      },
    };
  },

  actions: {},

  getters: {},
});
