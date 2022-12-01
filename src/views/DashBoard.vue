<template>
  <div class="flex w-full flex-col items-center h-screen">
    <div class="flex w-[1000px] h-full">
      <div class="flex flex-col w-full h-full">
        <div class="mb-2">
          <div class="flex w-full font-bold justify-between items-center mt-16">
            <h1 class="text-3xl mb-3 text-blue-700">
              <span class="font-black">{{ name }}</span>
              Project Dashobard
            </h1>
            <button
              class="bg-red-500 text-white p-3 rounded-lg"
              @click="logout"
            >
              logout
            </button>
          </div>
          <p class="text-gray-400">
            Your id is: <span class="font-bold text-black">{{ id }}</span
            >, use it for tracking errors on your website
          </p>
        </div>
        <div class="w-full">
          <ErrorRowHeader />
        </div>
        <div class="border w-full h-3/4 rounded-lg overflow-auto">
          <ErrorRow
            v-for="error in errors"
            :key="error._id"
            :error="error"
          ></ErrorRow>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useAppStore } from "@/store/app";
import { getId } from "@/utils/auth";
import ErrorRow from "@/components/ErrorRow.vue";
import ErrorRowHeader from "@/components/ErrorRowHeader.vue";
import { useRouter } from "vue-router";

const id = getId();
const store = useAppStore();
const router = useRouter();

const errors = computed(() => store.getErrors);
const name = computed(() => store.getName);

const logout = () => {
  store.logout();
  router.push({ path: "/" });
};

onMounted(() => {
  let userId = getId();
  store.loadErrors(userId);
  store.loadName(userId);
});
</script>
