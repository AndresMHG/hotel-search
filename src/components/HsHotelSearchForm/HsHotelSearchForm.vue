<template>
  <section>
    <form @submit.prevent="search">
      <input v-model="destination" placeholder="Destino" required />
      <input type="date" v-model="checkIn" />
      <input type="date" v-model="checkOut" />
      <label>Quartos</label>
      <input type="number" v-model="rooms" placeholder="Quartos" required min="1" />
      <label>Huespedes</label>
      <input type="number" v-model="guests" placeholder="Hóspede" required min="1" />
      <button type="submit">Buscar</button>
    </form>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSearchStore } from '../../store/search';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const destination = ref('');
    const checkIn = ref('');
    const checkOut = ref('');
    const rooms = ref(1);
    const guests = ref(1);
    const router = useRouter();
    const searchStore = useSearchStore();

    const search = () => {
      searchStore.setSearchCriteria({
        destination: destination.value,
        checkIn: checkIn.value,
        checkOut: checkOut.value,
        rooms: rooms.value,
        guests: guests.value
      });
      router.push({ name: 'search-results'});
      searchStore.fetchHotels(); 
    };

    return {
      destination,
      checkIn,
      checkOut,
      rooms,
      guests,
      search
    };
  },
});
</script>

