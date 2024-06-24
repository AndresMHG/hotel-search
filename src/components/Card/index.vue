<template>
    <div class="mini-card">
      <img :src="props.data.image" alt="Hotel Image" class="mini-card-img" />
      <div class="mini-card-content">
        <h2>{{ props.data.nome }}</h2>
        <p class="avaliacao">Avaliação: {{ props.data.avaliacao }}</p>
        <p class="price">Preço: R$ {{ props.data.preco }}</p>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps } from 'vue';

  interface Data {
    nome: string;
    endereco: string;
    avaliacao: number;
    preco: number;
    numero_quartos: number;
    numero_maximo_hospedes: number;
    datas_disponiveis: string[];
    image: string;
  }

  const props = defineProps<{
    data: Data;
  }>();
  </script>

  <style scoped>
  .mini-card {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    width: 400px;
    margin: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  .mini-card-img {
    width: 185px;
    height: 120px;
    object-fit: cover;
    border-right: 1px solid #ccc;
  }

  .mini-card-content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .mini-card-content h2 {
    margin: 0;
    font-size: 1em;
    font-weight: bold;
  }

  .mini-card-content .description {
    margin: 4px 0;
    font-size: 0.9em;
    color: #666;
  }

  .mini-card-content .avaliacao,
  .mini-card-content .quartos,
  .mini-card-content .hospedes,
  .mini-card-content .price {
    margin: 4px 0;
    font-size: 0.9em;
    color: #333;
    font-weight: bold;
  }
  </style>
