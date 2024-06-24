<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nome completo*</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail*</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Celular*</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <div class="form-group">
        <label for="cpf">CPF*</label>
        <input type="text" id="cpf" v-model="formData.cpf" required />
      </div>
      <div class="form-group">
        <label for="date">Data da Reserva*</label>
        <select id="date" v-model="formData.date" required>
          <option v-for="(date, index) in props.data" :key="index" :value="date">
            {{ date }}
          </option>
        </select>
      </div>
      <button type="submit">Reservar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

interface DatesReservation {
    data: string[];
  }

  const props = defineProps<{
    data: DatesReservation;
  }>();

interface FormData {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  date: string;
}

const availableDates = ref([
  '2024-07-01',
  '2024-07-02',
  '2024-07-03',
  // Añade más fechas disponibles aquí
]);

const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  cpf: '',
  date: ''
});

const emit = defineEmits(['reservation-success']);

const handleSubmit = () => {
  // Lógica para enviar os dados da reserva
  console.log('Reserva realizada:', formData.value);
  alert('Reserva realizada com sucesso!');
  emit('reservation-success');
};
</script>

<style scoped>
.form-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 4px;
  font-size: 0.9em;
  color: #333;
  text-align: left;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #0056b3;
}
</style>
