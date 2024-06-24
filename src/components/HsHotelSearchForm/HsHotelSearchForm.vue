<template>
  <section class="hs-hotel-search-form">
    <form @submit.prevent="search" class="hs-hotel-search-form--form">
      <div class="hs-input-large">
        <HsCitySelect v-model="destination" />
      </div>
      <div>
        <label>Entrada</label>
        <input type="date" v-model="checkIn" :class="{ 'is-invalid': checkInError }" required />
        <span v-if="checkInError" class="error-message">{{ checkInError }}</span>
      </div>
      <div>
        <label>Saída</label>
        <input type="date" v-model="checkOut" :class="{ 'is-invalid': checkOutError }" required/>
        <span v-if="checkOutError" class="error-message">{{ checkOutError }}</span>
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
import { ref, inject, watch } from 'vue';
import { useSearchStore } from '../../store/search';
import HsIcon from '../HsIcon/HsIcon.vue'
import HsCitySelect from '../HsCitySelect/HsCitySelect.vue';


const destination = ref('');
const checkIn = ref('');
const checkOut = ref('');
const rooms = ref(1);
const guests = ref(1);
const checkInError = ref('');
const checkOutError = ref('');
const searchStore = useSearchStore();
const showResults = inject('showResults');

const validateDates = () => {
  const today = new Date().toISOString().split('T')[0];
  if (checkIn.value < today) {
    checkInError.value = 'Não pode ser menor que hoje.';
  } else {
    checkInError.value = '';
  }

  if (checkOut.value && checkIn.value && checkOut.value <= checkIn.value) {
    checkOutError.value = 'A data de saída não pode ser menor que a data de entrada.';
  } else {
    checkOutError.value = '';
  }
};

watch([checkIn, checkOut], validateDates);

const search = () => {
  validateDates();
  if (!checkInError.value && !checkOutError.value) {
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
}
</script>

<style lang="scss" scoped>
@import './HsHotelSearchFormStyle.scss';

.error-message {
  color: red;
  font-size: 0.700em;
  display: block;
  position: absolute;
}

.is-invalid {
  border-color: red;
}
</style>
