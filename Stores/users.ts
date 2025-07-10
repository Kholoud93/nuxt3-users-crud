import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { name: 'John Doe', email: 'john@example.com', role: 'user' },
    { name: 'kholoud Ayman', email: 'kholoud@example.com', role: 'admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { name: 'Nora Jane', email: 'nora@example.com', role: 'user' }
  ])

  return {
    users
  }
})
