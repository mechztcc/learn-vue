<template>
  <v-col cols="12">
    <v-card class="pa-16 background rounded-xl ma-12 elevation-0">
      <v-row>
        <v-col cols="12" md="6" lg="6" class="d-flex flex-column align-start justify-center">
          <h1 class="mb-4">Descubra as melhores ofertas de seguros e proteja o que mais importa para você!</h1>
          <h4 class="mb-5 text-gray">
            Seja para proteger sua casa, carro, saúde ou até mesmo sua vida, as ofertas de seguros oferecem tranquilidade e segurança em diversas situações imprevistas. Com coberturas abrangentes e planos personalizados, você pode ter a certeza de que estará amparado caso algo inesperado aconteça.
          </h4>
          <v-btn outline color="secondary" rounded="xl" size="x-large" variant="tonal" append-icon="mdi-chevron-right" @click="test()">Learn more</v-btn>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <v-container>
            <v-row>
              <v-col cols="12" md="6" lg="6">
                <v-card class="d-flex flex-column justify-center align-center pa-14 rounded-xl card elevation-0">
                  <div class="rounded-circle pa-2 bg-secondary">
                    <v-icon size="x-large">mdi-folder</v-icon>
                  </div>
                  <h2>Secure name</h2>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-card class="d-flex flex-column justify-center align-center pa-14 rounded-xl card elevation-0">
                  <div class="rounded-circle pa-2 bg-secondary">
                    <v-icon size="x-large">mdi-folder</v-icon>
                  </div>
                  <h2>Secure name</h2>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-card class="d-flex flex-column justify-center align-center pa-14 rounded-xl card elevation-0">
                  <div class="rounded-circle pa-2 bg-secondary">
                    <v-icon size="x-large">mdi-folder</v-icon>
                  </div>
                  <h2>Secure name</h2>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-card class="d-flex flex-column justify-center align-center pa-14 rounded-xl card elevation-0">
                  <div class="rounded-circle pa-2 bg-secondary">
                    <v-icon size="x-large">mdi-folder</v-icon>
                  </div>
                  <h2>Secure name</h2>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>
<script lang="ts">
export default {
  name: 'gift-content-component',
  data() {
    return {
      name: 'Alberto',
    };
  },

  methods: {
    test() {
      this.name = 'Claudia';
    },
  },

  beforeUpdate() {
    console.log('before');
  },
};
</script>
<style lang="scss">
.background {
  background-color: rgb(241, 244, 244);
}

.card:hover {
  cursor: pointer;
}
</style>
