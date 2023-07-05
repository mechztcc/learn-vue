<template>
  <v-col cols="12" class="border pa-0 mb-10 mt-10 rounded-pill">
    <v-col cols="4" md="4" lg="3">
      <v-card class="elevation-0 rounded">
        <v-btn color="secondary" variant="tonal" class="rounded-xl w-100" >
          <v-icon size="x-large">mdi-chevron-left</v-icon>
          <h3>Voltar</h3>
        </v-btn>
      </v-card>
    </v-col>
  </v-col>
</template>
<script lang="ts">
export default {
  name: 'back-navigation-component',
  data() {
    return {};
  },
};
</script>
<style lang="scss">

  .border {
    border: 2px solid gray;
  }
</style>
