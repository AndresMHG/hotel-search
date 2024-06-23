<template>
  <section class="hs-hotel-search-form">
    <form @submit.prevent="search" class="hs-hotel-search-form--form">
      <div class="hs-input-large">
        <label>Destino</label>
        <input v-model="destination" placeholder="Para onde?" required />
      </div>
      <div>
        <label>Entrada</label>
        <input type="date" v-model="checkIn" required />
      </div>
      <div>
        <label>Saída</label>
        <input type="date" v-model="checkOut" required/>
      </div>
      <div class="hs-input-small">
        <label>Quartos</label>
        <input type="number" v-model="rooms" placeholder="Quartos" required min="1" />
      </div>
      <div class="hs-input-small">
        <label>Hóspedes</label>
        <input type="number" v-model="guests" placeholder="Hóspedes" required min="1" />
      </div>
      <div class="hs-button">
        <button type="submit" class="hs-hotel-search-form--form__button">
          <hs-icon name="search" size="30"/>
          Pesquisar
        </button>
      </div>
    </form>
  </section>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue';
import { useSearchStore } from '../../store/search';
import HsIcon from '../HsIcon/HsIcon.vue'

  const destination = ref('');
  const checkIn = ref('');
  const checkOut = ref('');
  const rooms = ref(1);
  const guests = ref(1);
  const searchStore = useSearchStore();
  const showResults = inject('showResults');

  const search = () => {
    searchStore.setSearchCriteria({
      destination: destination.value,
      checkIn: checkIn.value,
      checkOut: checkOut.value,
      rooms: rooms.value,
      guests: guests.value
    });
    searchStore.fetchHotels(); 
    showResults.value = true;
  }
</script>
<style lang="scss" scoped>
@import './HsHotelSearchFormStyle.scss';
</style>

