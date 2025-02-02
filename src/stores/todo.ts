import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import { type Item } from '@/interfaces';

export const useTodoStore = defineStore('todo', () => {
  // states
  const todoItems = ref<Item[]>([]);
  const todoLocalStorageData = localStorage.getItem('todoApp')

  if (todoLocalStorageData) {
    todoItems.value = JSON.parse(todoLocalStorageData)
  }

  // getter
  const items = computed(() => todoItems.value);

  // actions
  const addItem = (value: string) => {
    const newItem: Item = {
      id: uuidv4(),
      value
    };
    todoItems.value.push(newItem);
    todoItems.value = [...todoItems.value];

    localStorage.setItem('todoApp', JSON.stringify(todoItems.value))
  };

  const removeItem = (id: string) => {
    todoItems.value = todoItems.value.filter((x) => x.id !== id);
    localStorage.setItem('todoApp', JSON.stringify(todoItems.value))
  };

  return { todoItems, items, addItem, removeItem };
});
