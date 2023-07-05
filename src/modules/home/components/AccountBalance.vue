<template>
  ,<v-container fluid>
    <v-col cols="12" md="6" lg="3" offset-md="6" offset-lg="9">
      <v-card :loading="isLoading" class="rounded-pill pa-2 elevation-0 border mr-10">
        <div class="d-flex justify-space-between align-center">
          <v-icon class="bg-secondary pa-5 rounded-xl">mdi-currency-usd</v-icon>
          <div class="d-flex align-center" v-if="!isLoading">
            <h3>{{ info.balance }}</h3>
            <v-btn color="secondary" icon="mdi-tag-plus" class="mx-2"></v-btn>
          </div>
          <div class="d-flex align-center" v-if="isLoading">
            <h3><v-icon>mdi-dots-horizontal</v-icon></h3>
            <v-btn color="secondary" icon="mdi-dots-horizontal" disabled class="mx-2"></v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>
<script lang="ts">
import { mapActions } from 'pinia';
import { useHomeStore } from '../stores/Home.store';
import { IBalanceInfo } from '../types/BalanceInfo.interface';

import { onFindBalance } from '../../account/services/AccountService';
import { get } from '../../shared/services/LocalStorageService';

export default {
  name: 'account-balance-component',
  data() {
    return {
      store: useHomeStore(),
      info: {} as IBalanceInfo,
      isLoading: false,
    };
  },

  created() {
    this.info = this.store.info;
  },

  async beforeMount() {
    this.isLoading = true;
    const id = await get('userId');

    const balance = await onFindBalance(id);

    this.isLoading = false;
    this.onAddInfo(balance.accountBalance);
  },

  methods: {
    ...mapActions(useHomeStore, ['onAddInfo']),
  },
};
</script>
<style lang="scss">
.border {
  border: 2px solid gray;
}
</style>
