<template>
  <div class="flex w-full items-center h-screen justify-center">
    <LoginForm @submit="submit" />
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import LoginForm from "@/components/LoginForm.vue";

const router = useRouter();
const store = useAppStore();

const submit = (email, password) => {
  store.login({ email, password });
  router.push("/dashboard");
};
</script>

<style></style>
