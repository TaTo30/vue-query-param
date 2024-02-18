import { getValueFromURL, setValueToURL } from "./history";

import type { Binding, QueryParamArgs } from "../types";

const defaultArgs = {
  model: "",
  callback: null,
  format: (val: object) => `${val}`,
}

function getArgs(el: HTMLElement, binding: Binding): QueryParamArgs {
  if (typeof binding.value === 'string') {
     return Object.assign(defaultArgs, {model: binding.value})
  } else {
    return Object.assign({}, defaultArgs, binding.value)
  }
}

const vQueryParam = {
  name: 'v-query-param',
  // Return the query-param from url
  created(el: HTMLInputElement, binding: Binding) {
    const args = getArgs(el, binding)
    if (args.callback) {
      args.callback(getValueFromURL(binding.arg))
    }
  },
  updated(el: HTMLElement, binding: Binding) {
    const args = getArgs(el, binding)
    setValueToURL(binding.arg, args.format(args.model))
  },
  mounted(el: HTMLElement, binding: Binding) { 
    const args = getArgs(el, binding)
    if (args.model) // In mounted hook only update url if model has value
      setValueToURL(binding.arg, args.format(args.model))
  }
}

export default vQueryParam
