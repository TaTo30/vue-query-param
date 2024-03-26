<script setup lang="ts">
import { vQueryParam } from "../src";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref()
const search = ref(0)
const selectmodel = ref("")
</script>

<template>
  <input type="number" v-model="search" v-query-param:q="search" />
  <select v-model="selectmodel" v-query-param:selecto="selectmodel">
    <option value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <div>
    <VueDatePicker v-query-param:datefrom="{
      model: date,
      format: (val: Date) => val?.toLocaleDateString(),
      callback: (val: string) => date = val? new Date(val) : null
    }" v-model="date"/> 
  </div>
</template>

<style scoped>

</style>
