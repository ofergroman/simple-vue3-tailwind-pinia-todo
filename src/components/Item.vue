<template>
  <div class="flex justify-between">
      <label class="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md px-2 hover:bg-slate-100">
        <input type="checkbox" class="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-orange-600 checked:appearance-auto">
        <span class="select-none text-slate-600 peer-checked:text-slate-400 peer-checked:line-through">{{item.value}}</span>
      </label>
    <button class="text-slate-400 font-bold" @click="$emit('removeItem', item.id)">X</button>
  </div>
</template>

<script setup lang="ts">
import {type Item} from "@/interfaces";

interface Props {
  item: Item;
}

defineProps<Props>();
defineEmits(['removeItem'])
</script>

<style scoped>
</style>
