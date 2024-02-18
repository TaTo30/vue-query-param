<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, watch } from "vue";
const date = ref("")
const rootEl = ref<HTMLDivElement>(null)

const emits = defineEmits(["filter"])

watch(date, (value) => {
  rootEl.value.value = value?.toLocaleDateString()
  console.log(rootEl.value.dispatchEvent(new Event("input")));
})


</script>

<template>
  <div ref="rootEl">
      <VueDatePicker  v-model="date" />
  </div>
</template>