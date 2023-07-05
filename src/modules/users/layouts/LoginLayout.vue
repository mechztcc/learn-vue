<template>
  <v-container fluid class="d-flex align-center" style="min-height: 100vh">
    <v-col cols="10" md="6" lg="4" offset="1" offset-md="3" offset-lg="4">
      <v-form ref="form" lazy-validation>
        <h1>Welcome back</h1>
        <h4 class="text-gray">Start managing your bank account faster and better</h4>
        <v-text-field v-model="form.document" :rules="form.rules.documentRules" name="document" label="Document number" variant="outlined" hint="Enter your Document number" class="mt-5"></v-text-field>

        <v-text-field
          v-if="form.passType"
          v-model="form.password"
          :rules="form.rules.passwordRules"
          name="password"
          label="Password"
          variant="outlined"
          hint="Enter your Password"
          class="mt-5"
          prepend-inner-icon="mdi-lock"
          append-inner-icon="mdi-eye"
          type="password"
          @click:append-inner="changeVisibility()"
        ></v-text-field>

        <v-text-field
          v-if="!form.passType"
          v-model="form.password"
          :rules="form.rules.passwordRules"
          name="password"
          label="Password"
          variant="outlined"
          hint="Enter your Password"
          class="mt-5"
          prepend-inner-icon="mdi-lock"
          append-inner-icon="mdi-eye"
          type="text"
          @click:append-inner="changeVisibility()"
        ></v-text-field>

        <h4 class="text-end ma-3 text-secondary">Forgot password?</h4>

        <v-btn size="x-large" color="secondary w-100" @click="validateForm()"> Sign in </v-btn>
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

      <router-link to="/create-account">
        <h4 class="text-center mt-5 text-gray">Dont you have account? <b class="text-secondary">Sign up</b></h4>
      </router-link>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { save } from '../../shared/services/LocalStorageService';
import { useSidebarStore } from '../../shared/stores/Sidebar.store';
import { login } from '../services/UserService';
import { ILogin } from '../types/login.interface';

export default {
  name: 'login-layout',
  data() {
    return {
      store: useSidebarStore(),
      form: {
        document: '',
        password: '',
        passType: true,
        rules: {
          documentRules: [(doc: string) => !!doc || 'Document is required', (doc: string) => (doc && doc.length >= 11) || 'Document require at least 11 characteres'],
          passwordRules: [(pass: string) => !!pass || 'Password is required'],
        },
      },
    };
  },

  setup() {},

  created() {},

  methods: {
    async validateForm() {
      const { valid } = await (this.$refs as any).form.validate();

      if (!valid) {
        return;
      }

      const payload: ILogin = {
        document: this.form.document,
        password: this.form.password,
      };

      const data = await login(payload);
      save('token', data.token);
      save('userId', data.userId);

      if (!data) {
        return;
      }

      window.location.href = '/';
      //this.$router.push('/');
    },

    changeVisibility() {
      this.form.passType = !this.form.passType;
    },
  },
};
</script>

<style scoped>
.full-size {
  min-height: 100vh;
}
</style>
