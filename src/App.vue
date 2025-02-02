<template>
  <div id="todo" class="bg-white shadow-md rounded-lg p-6 w-full max-w-md h-3/4 flex flex-col">
    <div class="flex flex-col gap-2 relative mb-4">
      <h2 class="text-2xl font-bold text-gray-700">To-Do List</h2>
      <div class="relative w-full">
        <input v-model="itemData" type="text" placeholder="Add your task" class="w-full bg-gray-100 text-gray-900 border-none rounded-full py-2 pl-4 pr-24 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        <button class="absolute top-0 end-0 bg-orange-500 text-white px-8 py-2 rounded-full" @click="addItemClicked()">Add</button>
      </div>
    </div>
    <div class="flex-1 overflow-auto space-y-4">
      <div class="flex flex-col gap-2 px-2">
        <Item
            v-for="item in items"
            :key="item.id"
            :item="item"
            @remove-item="(key) => removeItem(key)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from "@/components/Item.vue";
import { useTodoStore } from "@/stores/todo";
import { storeToRefs } from "pinia";
import { ref } from "vue";

// Refs
const itemData = ref<string>('');

// Store
const store = useTodoStore();
const { items } = storeToRefs(store);
const {addItem, removeItem} = store;

const addItemClicked = () => {
  if (itemData.value) {
    addItem(itemData.value);
    itemData.value = '';
  }
};
</script>
