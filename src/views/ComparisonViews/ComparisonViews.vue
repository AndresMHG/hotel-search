<template>
  <div>
    <h1>Comparación de Hoteles</h1>
    <div v-for="hotel in selectedHotels" :key="hotel.nome">
      <h2>{{ hotel.nome }}</h2>
      <p>{{ hotel.endereco }}</p>
      <p>Avaliação: {{ hotel.avaliacao }}</p>
      <p>Preço: R$ {{ hotel.preco }}</p>
    </div>
  </div>
</template>
<script lang="ts" >
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const selectedHotels = ref([]);

    onMounted(() => {
      const hotels = localStorage.getItem('selectedHotels');
      if (hotels) {
        selectedHotels.value = JSON.parse(hotels);
      }
    });

    return { selectedHotels };
  }
});
</script>
