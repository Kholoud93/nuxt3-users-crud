<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <input v-model="name" type="text" placeholder="Name" class="w-full border p-2 rounded" />
    <input v-model="email" type="email" placeholder="Email" class="w-full border p-2 rounded" />

    <select v-model="role" class="w-full border p-2 rounded">
      <option disabled value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </select>

    <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
      Save
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps<{
  initialData?: { name: string; email: string; role: string }
}>()

const emit = defineEmits<{
  (e: 'submit', payload: { name: string; email: string; role: string }): void
}>()

const name = ref(props.initialData?.name || '')
const email = ref(props.initialData?.email || '')
const role = ref(props.initialData?.role || '')

function handleSubmit() {
  if (!name.value || !email.value || !role.value) return
  emit('submit', { name: name.value, email: email.value, role: role.value })
}
</script>
