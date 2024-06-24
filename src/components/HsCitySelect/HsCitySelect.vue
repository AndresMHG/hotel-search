<template>
    <div class="hs-city-select">
      <label for="city">Destino</label>
      <select v-model="destination" id="city" required>
        <option value="" disabled>Para onde?</option>
        <option v-for="city in cityList" :key="city.id" :value="city.cidade">
          {{ city.cidade }}
        </option>
      </select>
    </div>
  </template>

  <script lang="ts" setup>
  import { ref, defineProps, watch, defineEmits } from 'vue';
  import { cityList } from '../../api/mock-hotel';

  const emit = defineEmits(['update:modelValue']);


  const props = defineProps({
    modelValue: String
  });

  const destination = ref(props.modelValue);

  watch(destination, (newVal) => {
    emit('update:modelValue', newVal);
  });
  </script>

  <style scoped>
  .hs-city-select {
    display: flex;
    flex-direction: column;
  }

  .hs-city-select label {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .hs-city-select select {
    width: 100%;
    padding: 10px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    color: rgb(2, 4, 19);
    cursor: pointer;

    &:hover {
      background-color: #f3f4f5;
    }

    &.is-invalid {
      border-color: red;
    }
  }
  </style>
