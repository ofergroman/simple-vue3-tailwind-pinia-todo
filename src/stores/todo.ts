import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type Item } from '@/interfaces';

export const useTodoStore = defineStore('todo', () => {
  // states
  const todoItems = ref<Item[]>([]);
  const todoLocalStorageData = localStorage.getItem('todoApp')

  if (todoLocalStorageData) {
    todoItems.value = JSON.parse(todoLocalStorageData)
  }

  // getter
  const sortItems = computed(() => {
    return [...todoItems.value].sort((a, b) => a.id - b.id); // Return a new sorted array
  });

  // actions
  const addItem = (value: string) => {
    const newItem: Item = {
      id: todoItems.value.length,
      value
    };
    todoItems.value.push(newItem);
    todoItems.value = [...todoItems.value];

    localStorage.setItem('todoApp', JSON.stringify(todoItems.value))
  };

  const removeItem = (id: number) => {
    todoItems.value = todoItems.value.filter((x) => x.id !== id);
    localStorage.setItem('todoApp', JSON.stringify(todoItems.value))
  };

  return { todoItems, sortItems, addItem, removeItem };
});
