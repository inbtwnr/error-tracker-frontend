<template>
  <div class="grid gap-4">
    <div class="text-lg font-bold">Register</div>
    <FormKit
      type="text"
      label="Company Name"
      v-model="name"
      validation="required|min:6"
    />
    <FormKit
      type="text"
      label="Email"
      v-model="email"
      validation="required|email"
    />
    <FormKit
      type="password"
      label="Password"
      v-model="password"
      validation="required|min:6"
    />
    <button
      @click="$emit('submit', email, password)"
      class="p-2 border rounded-md bg-blue-500 hover:bg-blue-700 focus-within:bg-blut-900 text-white"
    >
      Sign in
    </button>
    <button @click="$emit('changeSignIn')">I want to sign in</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

defineEmits(["submit", "changeSignIn"]);
</script>
