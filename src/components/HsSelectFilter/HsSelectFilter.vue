<template>
  <div class="hs-select">
    <label v-if="label" class="hs-select--label">{{ label }}</label>
    <div class="hs-select--control" @click="toggleOpen">
      <div>
        <span v-if="!selected.name">{{ placeholder }}</span>
        <span v-else>{{ selected.name }}</span>
      </div>
      <hs-icon
        name="chevron-down"
        class="hs-select--icon"
        :class="{'hs-select--icon__rotate-180': open }"
      />
    </div>
    <div class="hs-select--content" :class="{ selectHide: !open }">
      <div
        v-for="(option, index) in options"
        :key="index"
        class="hs-select--content__options"
        @click="handleSelect(option)"
      >
        <p>{{ option.name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import HsIcon from '../HsIcon/HsIcon.vue';

const props = defineProps({
  options: {
    type: Array,
    default: [],
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'on-selected']);

const open = ref(false);
const selected = ref({});

const toggleOpen = () => {
  open.value = !open.value;
};

const handleSelect = (option) => {
  selected.value = option;
  emit('update:modelValue', option);
  emit('on-selected', option);
  open.value = false;
};
</script>
<style lang="scss" scoped>
@import './HsSelectFilterStyle.scss';
</style>
