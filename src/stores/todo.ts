import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Item } from '@/interfaces';

export const useTodoStore = defineStore('todo', () => {
  const todoItems = ref<Item[]>([]);

  // getter
  const sortItems = computed(() => {
    return [...todoItems.value].sort((a, b) => a.key - b.key); // Return a new sorted array
  });

  // actions
  const addItem = (value: string) => {
    const newItem: Item = {
      key: todoItems.value.length, // Unique key based on length
      value
    };
    todoItems.value.push(newItem);
    todoItems.value = [...todoItems.value];  // Reassign the array to trigger reactivity
  };

  const removeItem = (id: number) => {
    todoItems.value = todoItems.value.filter((x) => x.key !== id);
  };

  return { todoItems, sortItems, addItem, removeItem };
});
