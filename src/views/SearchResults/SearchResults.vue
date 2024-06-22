<template>
  <section>
    <h1>Resultados</h1>
    <div v-for="destino in searchStore.results" :key="destino.id_cidade">
      <h2>{{ destino.cidade }}</h2> <br>
      <span>-------------------------------------</span>
      <div v-for="hotel in destino.hoteis" :key="hotel.nome">
        <h3><strong>Name:</strong> {{ hotel.nome }}</h3>
        <p><strong>Endereço:</strong> {{ hotel.endereco }}</p>
        <p><strong>Avaliação:</strong> {{ hotel.avaliacao }}</p>
        <p><strong>Preço:</strong> R$ {{ hotel.preco }}</p>
        <p><strong>Número de Quartos:</strong> {{ hotel.numero_quartos }}</p>
        <p><strong>Máximo de Hóspedes:</strong> {{ hotel.numero_maximo_hospedes }}</p>
        <p><strong>Datas Disponíveis:</strong></p>
        <span>-------------------------------------</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSearchStore } from '../../store/search';

export default defineComponent({
  setup() {
    const searchStore = useSearchStore();
    searchStore.fetchHotels();
    return { searchStore };
  },
});
</script>
