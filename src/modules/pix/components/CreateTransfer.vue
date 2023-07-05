<template>
  <v-dialog transition="dialog-bottom-transition" width="auto" min-width="50%">
    <template v-slot:activator="{ props }">
      <v-col cols="12" md="4" offset-md="8" lg="3" offset-lg="9">
        <v-btn color="secondary" v-bind="props" size="x-large" class="rounded-xl elevation-0">
          <v-icon>mdi-plus</v-icon>
          Nova transferência
        </v-btn>
      </v-col>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-toolbar color="secondary">
          <v-col cols="12">
            <h2>
              <v-icon>mdi-plus</v-icon>
              Nova transferência
            </h2>
          </v-col>
        </v-toolbar>
        <v-card-text>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="isActive.value = false">
            <v-icon>mdi-close</v-icon>
            fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts">
export default {
  name: 'create-transfer-component',
  date() {
    return {};
  },
};
</script>
<style lang=""></style>
