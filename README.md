# vue-query-param

## Introduction

`vue-query-param` is a vue directive that binds and syncs a `ref` model to the URL's query paramaters.

![vue-query-param(2)](https://github.com/TaTo30/vue-query-param/assets/57086025/28d9babc-90c0-4dad-a858-9c6c32345887)


## Installation

```console
npm i vue-query-param
```

```console
yarn add vue-query-param
```

## Basic Usage

```vue
<script setup lang="ts">
import { vQueryParam } from "vue-query-param";

const filter = ref("")
</script>

<template>
  <input v-model="filter" v-query-param:filter="filter" />
</template>
```

## Hook Arguments

### Directive argument

`arg` must be the *key* of the model in the URL, for example, this code:
```vue
<input v-model="search" v-query-param:q="search" />
<input v-model="filter" v-query-param:filter="filter" />
```
Will produce this URL `https://<domain>/<subpath>/?q=<value>&filter=<value>`

### Directive value

In the most basic cases you only need to use a `ref` directly in the directive value but for more complex cases you can use an object with the following options:

```js
{
    model: ref_property,
    format: (val) => val.toString(),
    callback: (val) => ref_property = val
}
```

#### model

The `ref` field that `v-query-param` will bind on the URL.

#### format

A `function` to format the model value, useful when the value is not a primitive type or just masking the value when is set in the URL.

#### callback

A `function` that is called during the `created` hook, use this if you want to set at your `ref` field the current URL value before mounting the template.

## Examples 

A common use case could be a search input, usually you want to store in URL the user's input, so when the page is reloaded you still have the user's input.

```vue
<script setup lang="ts">
import { vQueryParam } from "vue-query-param";

const search = ref("")
</script>

<template>
  <input v-model="search" v-query-param:q="search" />
</template>
```

For complex types as dates, you can use the `format` and `callback` options so you can store in URL the date in a specific format and retrieve it again during the `created` hook by parsing the formatted value.

```vue
<script setup lang="ts">
import { vQueryParam } from "vue-query-param";

const date = ref()
</script>

<template>
  <div>
    <VueDatePicker v-query-param:datefrom="{
      model: date,
      format: (val: Date) => val.toLocaleDateString(),
      callback: (val: string) => date = new Date(val)
    }" v-model="date"/> 
  </div>
</template>
```
