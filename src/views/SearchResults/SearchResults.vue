<template>
  <section>
    <h1>Resultados</h1>
    <ul>
      <!-- <li v-for="hotel in searchStore.results" :key="hotel.destination.id">
        <span>{{ hotel.destination.name }}</span>
        <span>{{ hotel.destination.city }}, {{ hotel.destination.country }}</span>
        <span>${{ hotel.destination.price }}</span>
        <span>{{ hotel.destination.rating }} stars</span>
      </li> -->
      <div  v-for="(hotel, index) in searchStore.results" :key="index">
        {{ hotel }}
      </div>
    </ul>
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

