<template>
  <div class="flex w-full items-center h-screen justify-center">
    <LoginForm @submit="signIn" v-if="showLogin" @changeSignUp="change" />
    <RegisterForm @submit="signUp" v-if="showRegister" @changeSignIn="change" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { useRouter } from "vue-router";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";

const router = useRouter();
const store = useAppStore();

const showLogin = ref(false);
const showRegister = ref(true);

const signIn = (email, password) => {
  store.login({ email, password }).then(() => router.push("/dashboard"));
};

const signUp = (name, email, password) => {
  store.register({ name, email, password }).then(() => {
    showLogin.value = !showLogin.value;
    showRegister.value = !showRegister.value;
  });
};

const change = () => {
  showLogin.value = !showLogin.value;
  showRegister.value = !showRegister.value;
};
</script>

<style></style>
