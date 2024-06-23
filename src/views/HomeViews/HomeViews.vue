<template>
    <div class="home-views">
        <h1>Comparamos preços de hotéis em vários sites</h1>
        <span class="home-views--subtitle">Nós fazemos a pesquisa.Você economiza.</span>
    </div>    
    <hs-hotel-search-form />
    <section class="hs-search-results">
        <hs-search-results v-if="showResults"/>
    </section>
</template>
<script setup>
import { ref, provide } from 'vue'
import HsHotelSearchForm from '../../components/HsHotelSearchForm/HsHotelSearchForm.vue'
import HsSearchResults from '../../components/HsSearchResults/HsSearchResults.vue';

const showResults = ref(false);
provide('showResults', showResults);
</script>
<style lang="scss" scoped>
 @import './HomeViewsStyle.scss';
</style>