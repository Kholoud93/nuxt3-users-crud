<template>
  <table class="w-full text-left border rounded shadow">
    <thead>
      <tr class="bg-gray-100">
        <th v-for="col in columns" :key="col.key" class="p-2">
          {{ col.label }}
        </th>
        <th v-if="hasActions" class="p-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="itemKey(item)" class="border-t hover:bg-gray-50">
        <td v-for="col in columns" :key="col.key" class="p-2">
           <slot :name="col.key" :value="item[col.key]" :item="item">

             {{ item[col.key] }}
           </slot>
        </td>
        <td v-if="hasActions" class="p-2 flex gap-2">
          <slot name="actions" :item="item" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Column {
  key: string
  label: string
}

const props = defineProps<{
  items: any[]
  columns: Column[]
  hasActions?: boolean
  itemKey?: (item: any) => string | number
}>()

const itemKey = props.itemKey || ((item) => item.email)
</script>

