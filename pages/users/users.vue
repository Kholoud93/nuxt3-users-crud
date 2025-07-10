<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Users List</h1>

<div class="flex justify-between items-center mb-4">
  <NuxtLink
  to="/users/add"
  class="inline-block mb-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
>
  ➕ Add User
</NuxtLink>

  <input
    type="text"
    v-model="searchQuery"
    placeholder="Search users..."
    class="border p-2 rounded-md mb-4"
  />
</div>



<DataTable :items="paginatedUsers" :columns="columns" :has-actions="true">
  <template #name="{ value }">
    <span class="text-yellow-500 font-semibold">{{ value }}</span>
  </template>

  <template #role="{ value }">
    <span
      :class="value === 'admin' ? 'text-green-500 font-semibold' : 'text-blue-600 font-semibold'"
    >
      {{ value }}
    </span>
  </template>

  <template #actions="{ item }">
    <NuxtLink
      :to="`/users/edit/${item.email}`"
      class="text-blue-500 hover:underline text-sm"
    >
      ✏️
    </NuxtLink>
    <button
      @click="deleteUser(item.email)"
      class="text-red-500 hover:underline text-sm"
    >
      🗑️
    </button>
  </template>
</DataTable>

        <div class="mt-4 flex justify-between w-full ">
    <button class=" px-4 py-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"  @click="currentPage--" :disabled="currentPage === 1">   ← Prev</button>
    <button class="px-4 py-2   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
    @click="currentPage++" :disabled="currentPage * itemsPerPage >= filteredUsers.length">   Next → </button>
  </div>
</div>

</template>
<script setup lang="ts">  
import { useUsersStore } from '~/Stores/users'
import { ref, computed } from 'vue'

interface User {
  name: string
  email: string
  role: string
}
const columns = [
  
  { key: 'name', label: 'Name'   },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
]

const usersStore = useUsersStore()
const users = usersStore.users as User[]
const searchQuery = ref('')
const filteredUsers = computed(() => {
  return users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const currentPage = ref(1)
const itemsPerPage = 5
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredUsers.value.slice(start, end)
 
})

const deleteUser = (email: string) => {
  const confirmed = confirm(`Are you sure you want to delete ${email}?`)
  if (!confirmed) return

  const index = usersStore.users.findIndex(u => u.email === email)
  if (index !== -1) {
    usersStore.users.splice(index, 1)
  }
}


</script>