<script setup lang="ts">
import { vQueryParam } from "../src";
import { computed, ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import DatePicker from "./DatePicker.vue"


const filter = ref("")
const date = ref("")
const datestr = computed(() => `${date.value}`)
const filterstr = computed(() => `${filter.value}`)
const mirey = ref("")
const search = ref("")
const radiomodel = ref("Valor 1")
const selectmodel = ref("")
const checkmodel = ref(true)

function handlerFilter(id: string, value: string) {  
  switch (id) {
    case "filter":
      filter.value = value
      break;
    case "mirey":
      mirey.value = value
      break;
    case "radio":
      radiomodel.value = value
      break
    case "checkin":
      checkmodel.value = value
      break
  }
}

</script>

<template>
  <!-- <select v-model="selectmodel" v-query-param:selecto="selectmodel">
    <option value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select> -->
  <!-- <div v-query-param:radio="radiomodel">
    <span>Radio inputs</span>
    <input type="radio" value="Valor 1" name="radioinput" v-model="radiomodel"  />
    <input type="radio" value="Valor 2" name="radioinput" v-model="radiomodel"  />
    <input type="radio" value="Valor 3" name="radioinput" v-model="radiomodel"  />
    {{ radiomodel }}
  </div> -->
  <!-- <div>
    <span>checkbox</span>
    <input type="checkbox" v-model="checkmodel" true-value="yes" false-value="no" v-query-param:checkin="checkmodel" />
  </div>
  <div>Selected: {{ selectmodel }}</div> -->
  <!-- <div v-query-param:filter="filterstr">{{ typeof filter }}</div>
  <input type="number" v-model="filter" /> -->
  <!-- <div>
    <textarea v-model="search" v-query-param:textarea="search" placeholder="add multiple lines"></textarea>
  </div> -->
  <div>
    <VueDatePicker v-query-param:datefrom="datestr" v-model="date"/> 
  </div>
</template>

<style scoped>

</style>
