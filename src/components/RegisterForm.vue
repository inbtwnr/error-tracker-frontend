<template>
  Register
  <FormKit type="text" label="Company Name"></FormKit>
  <FormKit type="text" label="Email" v-model="email" />
  <FormKit type="password" label="Password" v-model="password" />
  <button @click.prevent="submit">Login</button>
</template>

<script setup></script>
