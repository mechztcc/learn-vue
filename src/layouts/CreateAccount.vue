<template>
  <v-container fluid>
    <v-col cols="10" md="6" lg="4" offset="1" offset-md="3" offset-lg="4">
      <v-form ref="form" lazy-validation>
        <h1>Welcome to your account</h1>
        <h4 class="text-gray">
          Start managing your bank account faster and better
        </h4>

        <v-text-field
          :model="form.name.value"
          :rules="form.name.nameRules"
          name="name"
          label="Name"
          variant="outlined"
          hint="Enter your full name"
          class="mt-5"
        ></v-text-field>

        <v-text-field
          :model="form.document.value"
          :rules="form.document.documentRules"
          name="document"
          label="Document number"
          variant="outlined"
          hint="Enter your Document number"
          class="mt-5"
        ></v-text-field>

        <v-text-field
          v-if="form.password.isHidden"
          v-model="form.password.value"
          :rules="form.password.passwordRules"
          name="password"
          label="Password"
          variant="outlined"
          hint="min length 8"
          append-inner-icon="mdi-eye"
          type="password"
          @click:append-inner="changeVisibility()"
          class="mt-5"
        ></v-text-field>

        <v-text-field
          v-if="!form.password.isHidden"
          v-model="form.password.value"
          :rules="form.password.passwordRules"
          name="password"
          label="Password"
          variant="outlined"
          hint="min length 8"
          append-inner-icon="mdi-eye"
          type="text"
          @click:append-inner="changeVisibility()"
          class="mt-5"
        ></v-text-field>

        <v-btn size="x-large" color="secondary" class="w-100">Sign up</v-btn>
      </v-form>

      <div class="d-flex ma-4">
        <v-divider class="ma-5"></v-divider>
        <span>or</span>
        <v-divider class="ma-5"></v-divider>
      </div>

      <div class="d-flex justify-space-around">
        <v-btn prepend-icon="mdi-google" variant="tonal"> Google </v-btn>
        <v-btn prepend-icon="mdi-facebook" variant="tonal"> Facebook </v-btn>
      </div>

      <router-link to="/login">
        <h4 class="text-center mt-5 text-gray">
          Have account? <b class="text-secondary">Sign in</b>
        </h4>
      </router-link>
    </v-col>
  </v-container>
</template>
<script lang="ts">
export default {
  name: 'app-create-account',
  data() {
    return {
      form: {
        document: {
          value: '',
          documentRules: [],
        },
        name: {
          value: '',
          nameRules: [],
        },
        password: {
          value: '',
          passwordRules: [],
          isHidden: true,
        },
      },
    };
  },
  methods: {
    changeVisibility() {
      this.form.password.isHidden = !this.form.password.isHidden;
    },
  },
};
</script>
<style lang="scss"></style>
