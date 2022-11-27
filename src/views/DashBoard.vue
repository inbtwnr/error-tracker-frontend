<template>
  <div class="flex w-full flex-col items-center h-screen">
    <div class="flex w-[1000px] h-full">
      <div class="flex flex-col w-full h-full">
        <div class="mb-2">
          <div class="text-3xl font-bold mt-16 mb-3 text-blue-700">
            Your dashobard
          </div>
          <div class="text-gray-400">
            Your id is: <span class="font-bold text-black">{{ id }}</span
            >, use it for tracking errors on your website
          </div>
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

const id = computed(() => getId());
const store = useAppStore();

const errors = computed(() => store.getErrors.data);

onMounted(() => {
  store.loadErrors(id);
});
</script>
