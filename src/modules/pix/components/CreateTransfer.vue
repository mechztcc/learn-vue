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
      <v-card :loading="isLoading">
        <v-toolbar color="secondary">
          <v-col cols="12">
            <h2>
              <v-icon>mdi-plus</v-icon>
              Nova transferência
            </h2>
          </v-col>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <h1>Please enter the target account</h1>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.accountTarget" :rules="form.rules.accountTargetRules" name="Account number" label="Account number" variant="outlined" hint="Enter the account number" class="mt-5"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.value" type="number" min="1" :rules="form.rules.valueRules" name="Transfer value" label="Value to transfer" variant="outlined" hint="Enter the value" class="mt-5"></v-text-field>
              </v-col>
            </v-row>

            <v-btn color="secondary" class="mt-3" size="x-large" @click="validateForm()">Submit</v-btn>
          </v-form>
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
import { makeTransfer } from '../services/PixService';
import { IMakeTransfer } from '../types/MakeTransfer.interface';

export default {
  name: 'create-transfer-component',
  data() {
    return {
      isLoading: false,
      form: {
        accountTarget: '',
        value: 0,
        rules: {
          accountTargetRules: [],
          valueRules: [],
        },
      },
    };
  },
  methods: {
    async validateForm() {
      this.isLoading = true;
      const { valid } = await (this.$refs as any).form.validate();

      if (!valid) {
        return;
      }

      const payload: IMakeTransfer = {
        receiverCode: '128322b5-e14b-47a8-82e7-20ae5210d722',
        shipperCode: '128322b5-e14b-47a8-82e7-20ae5210d722',
        value: Number(this.form.value),
      };

      const data = await makeTransfer(payload).then(() => ((this.isLoading = false), (this.$refs as any).form.reset()));
    },
  },
};
</script>
<style lang=""></style>
