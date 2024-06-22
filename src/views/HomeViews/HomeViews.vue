<template>
    <div class="home-views">
        <h1>Comparamos preços de hotéis em vários sites</h1>
        <span class="home-views--subtitle">Nós fazemos a pesquisa. Você salva!</span>
    </div>    
    <hs-hotel-search-form />
</template>
<script setup>
import HsHotelSearchForm from '../../components/HsHotelSearchForm/HsHotelSearchForm.vue'
</script>
<style lang="scss" scoped>
 @import './HomeViewsStyle.scss';
</style>