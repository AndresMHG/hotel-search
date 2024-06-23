<template>
  <header class="header">
    <div class="header-logo">
      <hs-icon name="hotel" size="sm" />
      <h1>Hote|.com</h1>
    </div>
    <nav class="header-nav">
      <a href="#" target="_blank">
        <strong v-if="!selectedHotels">({{ selectedHotels.length }})</strong> Comparación
      </a>
      <a href="#" target="_blank">Dicas</a>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import HsIcon from '../HsIcon/HsIcon.vue';

const selectedHotels = ref([]);

</script>
<style lang="scss" scoped>
@import './HsHeaderStyle.scss';
</style>
