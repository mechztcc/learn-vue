<template>
  <AccountBalance />
  <GiftContent />
</template>
<script lang="ts">
import { useSidebarStore } from '../../shared/stores/Sidebar.store';
import Sidebar from '../../shared/components/Sidebar.vue';
import GiftContent from '../components/GiftContent.vue';
import AccountBalance from '../components/AccountBalance.vue';


export default {
  name: 'home-layout',
  components: {
    Sidebar,
    GiftContent,
    AccountBalance,
  },
  data() {
    return {
      store: useSidebarStore(),
    };
  },
  methods: {},
};
</script>
<style lang="ts"></style>
