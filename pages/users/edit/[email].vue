<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Edit User</h2>

    <div v-if="user">
      <UserForm :initialData="user" @submit="handleUpdate" />
    </div>
    <div v-else>
        <p class="text-red-500">User not found.</p>
      
    </div>
  </div>
</template>

<script setup lang="ts">

import { useUsersStore } from '~/Stores/users'
import { useRoute, useRouter } from 'vue-router'
import UserForm from '~/components/UserForm.vue'
import { computed } from 'vue'

const usersStore = useUsersStore()
const route = useRoute()
const router = useRouter()

const email = route.params.email as string
   console.log('Route param email:', email)
        console.log('Users in store:', usersStore.users)

const user = computed(() => usersStore.users.find(u => u.email === email))

function handleUpdate(updatedUser: { name: string; email: string; role: string }) {
    const index = usersStore.users.findIndex(u => u.email === email)
    if (index !== -1) {
        usersStore.users[index] = updatedUser
        router.push('/users/users')
     
  }
}


</script>



