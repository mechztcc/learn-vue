<template>
  <v-container>
    <v-col cols="12">
      <h1>Histórico de transações</h1>
      <HistoryCard v-for="(item, i) in 5" :key="i" />
    </v-col>
    <v-col cols="6" offset="6">
      <v-pagination :length="4"></v-pagination>
    </v-col>
  </v-container>
</template>
<script>
import HistoryCard from '../components/HistoryCard.vue';
import { transferHistory } from '../services/PixService';
import { usePixStore } from '../stores/Pix.store';

export default {
  name: 'pix-layout',
  components: {
    HistoryCard,
  },
  data() {
    return {
      store: usePixStore(),
    };
  },

  async created() {
    const data = await transferHistory();
    console.log(this.store.data.value);
  },
};
</script>
<style lang="scss"></style>
