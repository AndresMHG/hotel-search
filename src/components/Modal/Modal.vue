<template>
    <div v-if="isVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <slot name="header">
            <h3>Modal Header</h3>
          </slot>
          <!-- <button class="close-button" @click="closeModal">X</button> -->
        </div>
        <div class="modal-body">
          <slot name="body">
            <p>Modal Body</p>
          </slot>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true
    }
  });

  const emits = defineEmits(['update:isVisible']);

  const closeModal = () => {
    emits('update:isVisible', false);
  };
  </script>

  <style scoped>
  @import './Modal.scss';
  </style>
