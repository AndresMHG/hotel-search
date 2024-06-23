<template>
  <section class="hs-search-results">
    <div class="hs-search-results--filter-hotel">
      <h2 class="hs-search-results--title">Resultados</h2>
      <div>
        <hs-select-filter
          :options="options"
          v-model="selectedOption"
          label="Filtros"
          placeholder="Escolher"
          @on-selected="sortResults"
        />
      </div>
    </div>
    <div v-for="destino in searchStore.results" :key="destino.id_cidade">
      <h2>Cidade: {{ destino.cidade }}</h2>
      <br />
      <div class="hs-search-results--list">
        <div v-for="hotel in destino.hoteis" :key="hotel.nome" class="hs-search-results--section-list">
          <div class="hs-search-results--img">
            <img :src="hotel.image" alt="hotel" />
          </div>
          <div class="hs-search-results--content">
            <span class="hs-search-results--content__name">{{ hotel.nome }}</span>
            <span>{{ hotel.endereco }}</span>
            <span class="hs-search-results--content--star">
              <template v-for="n in 5" >
                <hs-icon
                  :name="n <= hotel.avaliacao ? 'star' : 'star_border'"
                />
              </template>
              <strong>{{ hotel.avaliacao }}</strong> 
            </span>
            <div class="hs-search-results--content__description">
              <span>{{ hotel.numero_quartos }}<strong> Quartos</strong></span>
              <span>{{ hotel.numero_maximo_hospedes }}<strong> Hóspedes</strong></span>
            </div>
          </div>
          <div class="hs-search-results--content__preco">
            <span>R$ {{ hotel.preco }}</span>
            <span class="hs-search-results--content__taxes">Inclui impostos e taxas</span>
            <button
              type="button"
              class="hs-search-results--content__btn-comparison"
              @click="toggleSelectedHotel(destino, hotel)"
              :class="{ 'selected': isSelectedHotel(hotel) }"
            >
              {{ isSelectedHotel(hotel) ? 'Selecionado' : 'Comparação de Ofertas' }}
            </button>
            <button type="button" class="hs-search-results--content__btn-reserve">Reserva</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useSearchStore } from '../../store/search';
import HsSelectFilter from '../HsSelectFilter/HsSelectFilter.vue';
import HsIcon from '../HsIcon/HsIcon.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    HsSelectFilter,
    HsIcon,
  },
  setup() {
    const searchStore = useSearchStore();
    searchStore.fetchHotels();
    const selectedOption = ref(null);
    const selectedHotels = ref([]);
    const showComparison = ref(false);
    const router = useRouter();

    const options = [
      { name: 'Preço (mais barato)', value: 'priceLow' },
      { name: 'Preço (mais caro)', value: 'priceHigh' },
      { name: 'Melhores avaliações', value: 'rating' },
    ];

    watch(selectedOption, (newOption) => {
      if (newOption) {
        sortResults(newOption.value);
      }
    });

    const sortResults = (option) => {
      switch (option) {
        case 'priceLow':
          searchStore.results.forEach(destino => {
            destino.hoteis.sort((a, b) => a.preco - b.preco);
          });
          break;
        case 'priceHigh':
          searchStore.results.forEach(destino => {
            destino.hoteis.sort((a, b) => b.preco - a.preco);
          });
          break;
        case 'rating':
          searchStore.results.forEach(destino => {
            destino.hoteis.sort((a, b) => b.avaliacao - a.avaliacao);
          });
          break;
      }
    };

    const toggleSelectedHotel = (destino, hotel) => {
      const index = selectedHotels.value.findIndex(h => h.nome === hotel.nome);
      if (index === -1) {
        selectedHotels.value.push(hotel);
      } else {
        selectedHotels.value.splice(index, 1);
      }
      showComparison.value = selectedHotels.value.length > 0;
      if (showComparison.value) {
        localStorage.setItem('selectedHotels', JSON.stringify(selectedHotels.value));
        router.push({ name: 'comparison' });
      }
    };

    const isSelectedHotel = (hotel) => {
      return selectedHotels.value.some(h => h.nome === hotel.nome);
    };

    return { searchStore, options, selectedOption, sortResults, toggleSelectedHotel, isSelectedHotel, selectedHotels, showComparison };
  },
});
</script>
<style lang="scss" scoped>
@import './HsSearchResultStyle.scss';
</style>
