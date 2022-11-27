<template>
  <div class="flex w-full border-b last:bottom-b-0">
    <div class="p-3 font-bold w-32">{{ error.vm }}</div>
    <div class="p-3 w-32">{{ error.info }}</div>
    <div class="p-3 flex-1">{{ error.msg }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["error"]);
</script>
