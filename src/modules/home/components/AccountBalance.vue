<template>
  ,<v-container fluid>
    <v-col cols="12" md="6" lg="3" offset-md="6" offset-lg="9">
      <v-card class="rounded-pill pa-2 elevation-0 border mr-10">
        <div class="d-flex justify-space-between align-center">
          <v-icon class="bg-secondary pa-5 rounded-xl">mdi-currency-usd</v-icon>
          <div class="d-flex align-center">
            <h3>150,00</h3>
            <v-btn  color="secondary" icon="mdi-tag-plus" class="mx-2"></v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>
<script lang="ts">
export default {
  name: 'account-balance-component',
};
</script>
<style lang="scss">
.border {
  border: 2px solid gray;
}
</style>
