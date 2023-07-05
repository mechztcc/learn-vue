<template>
  <v-card class="mt-4 pa-3 rounded-xl background" variant="tonal">
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <v-img class="rounded-pill img-size" src="@/assets/imgs/mamaco.jpg"></v-img>
        <div class="d-flex flex-column">
          <h2>Transferência realizada</h2>
          <h4>R$ 800, 00</h4>
        </div>
        <v-icon>mdi-dots-horizontal</v-icon>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'history-card',
  data() {
    return {};
  },

  async created() {},
};
</script>
<style lang="scss">
.img-size {
  max-height: 60px;
  min-height: 60px;

  min-width: 60px;
  max-width: 60px;
}
</style>
