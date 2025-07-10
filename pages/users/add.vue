<template>
  <div class="max-w-md mx-auto p-6 bg-blue-50 rounded shadow mt-20 ">
    <h2 class="text-xl font-bold mb-4">Add New User</h2>

    <UserForm @submit="handleCreate" />
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from '~/Stores/users'
import { useRouter } from 'vue-router'
import UserForm from '~/components/UserForm.vue'

const usersStore = useUsersStore()
const router = useRouter()

function handleCreate(user: { name: string; email: string; role: string }) {
  usersStore.users.push(user)
  router.push('/users/users')
}
</script>
