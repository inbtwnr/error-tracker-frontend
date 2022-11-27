<template>
  <div class="grid gap-4">
    <div class="text-lg font-bold">Sign in</div>
    <FormKit type="text" label="Email" v-model="email" />
    <FormKit type="password" label="Password" v-model="password" />
    <button
      @click="$emit('submit', email, password)"
      class="p-2 border rounded-md bg-blue-500 hover:bg-blue-700 focus-within:bg-blut-900 text-white"
    >
      Sign in
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const email = ref("");
const password = ref("");

defineEmits(["submit"]);
</script>

<style></style>
