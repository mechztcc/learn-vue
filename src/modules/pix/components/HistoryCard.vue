<template>
  <v-card class="mt-4 pa-3 rounded-xl border elevation-0">
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <div class="d-flex flex-column">
          <v-img class="rounded-pill img-size" src="@/assets/imgs/mamaco.jpg"></v-img>
          <h4 class="mt-1">Mrs Mamaco</h4>
        </div>
        <div class="d-flex flex-column">
          <h2>Transferência realizada</h2>
          <span class="text-gray">{{ new Date(history.created_at).toLocaleDateString() }}</span>
          <h4>R$ {{ history.value }}</h4>
        </div>
        <v-icon>mdi-chevron-down</v-icon>
      </div>
    </v-container>
  </v-card>
</template>
<script lang="ts">
export default {
  name: 'history-card',
  data() {
    return {};
  },

  props: {
    history: {
      type: Object,
      required: true,
    },
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
