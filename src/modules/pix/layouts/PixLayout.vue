<template>
  <v-container>
    <BackNavigation @click="navigate()" />
    <CreateTransfer />
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="6">
          <h1>Histórico de transações</h1>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field ref="input" prepend-inner-icon="mdi-magnify" label="Nome do usuário" variant="outlined"></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <HistoryCard v-for="(item, i) in store.data.history" :key="i" :history="item" />
    </v-col>
    <v-col cols="6" offset="6">
      <v-pagination  length="2"></v-pagination>
    </v-col>
  </v-container>
</template>
<script lang="ts">
import HistoryCard from '../components/HistoryCard.vue';
import CreateTransfer from '../components/CreateTransfer.vue';
import { transferHistory } from '../services/PixService';
import { usePixStore } from '../stores/Pix.store';
import BackNavigation from '../../shared/components/BackNavigation.vue';

export default {
  name: 'pix-layout',
  components: {
    HistoryCard,
    CreateTransfer,
    BackNavigation,
  },
  data() {
    return {
      store: usePixStore(),
    };
  },

  mounted() {
    (this.$refs as any).input.focus();
  },

  methods: {
    navigate() {
      window.history.back();
    },
  },

  async created() {
    const data = await transferHistory();
    this.store.data.history = data;
  },
};
</script>
<style lang="scss"></style>
