<script setup lang="ts">
import { vQueryParam } from "../src";
import { ref } from "vue";
import DatePicker from "./DatePicker.vue"


const filter = ref("")
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
  <!-- <div>
    <span>Texts inputs</span>
    <input v-query-param:filter="handlerFilter" v-model="filter" />
    <input v-query-param:mirey="handlerFilter" v-model="mirey" />
  </div>
  <div>
    <span>Radio inputs</span>
    <input type="radio" value="Valor 1" name="radioinput" v-model="radiomodel" v-query-param:radio="handlerFilter" />
    <input type="radio" value="Valor 2" name="radioinput" v-model="radiomodel" v-query-param:radio="handlerFilter" />
    <input type="radio" value="Valor 3" name="radioinput" v-model="radiomodel" v-query-param:radio="handlerFilter" />
    {{ radiomodel }}
  </div>
  <div>
    <span>checkbox</span>
    <input type="checkbox" v-model="checkmodel" true-value="yes" false-value="no" v-query-param:checkin />
  </div>
  <div>Selected: {{ selectmodel }}</div>
  <select v-model="selectmodel" v-query-param:selecto>
    <option value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <div>
    <textarea v-model="search" v-query-param:textarea placeholder="add multiple lines"></textarea>
  </div> -->
  <div>
    <DatePicker v-query-param:datefrom />
  </div>
</template>

<style scoped>

</style>
