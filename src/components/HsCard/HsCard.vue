<template>
  <div>
    <h3>{{ hotel.name }}</h3>
    <p>Preço: {{ hotel.price }}</p>
    <p>Avaliação: {{ hotel.rating }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    hotel: {
      type: Object as PropType<{ name: string; price: number; rating: number }>,
      required: true,
    },
  },
});
</script>
