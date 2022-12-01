<template>
  <div class="flex w-full border-b last:bottom-b-0">
    <div class="p-3 font-bold w-44 break-all">{{ props.error.vm }}</div>
    <div class="p-3 w-32">
      {{ props.error.msg }}
    </div>
    <div class="p-3 flex-1">
      {{ props.error.info }}
    </div>
    <div class="p-3 w-36">{{ errorHandled }}</div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { format } from "date-fns";

const props = defineProps(["error"]);

console.log(props.error.info);

const errorHandled = computed(() =>
  format(new Date(props.error.createdAt), "dd.MM HH:mm bbb")
);
</script>
