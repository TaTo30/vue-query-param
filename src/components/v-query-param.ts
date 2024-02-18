import { getValueFromURL, setValueToURL } from "./history";

import type { Binding, QueryParamArgs, QueryParamArgsOptions } from "../types";

enum Action {
  Add,
  Remove
}

const baseArgs = {
  handler: null,
  format: (val: object) => val,
  event: 'input',
  target: (val: HTMLInputElement) => val.value
}

const defaultArgs: QueryParamArgsOptions = {
  INPUT: Object.assign(baseArgs, {
    target: (val: HTMLInputElement) => (val.type == 'checkbox' ? val.checked : val.value)
  }),
  TEXTAREA: baseArgs,
  SELECT: baseArgs,
  DEFAULT: baseArgs
}

function getArgs(el: HTMLElement, binding: Binding): QueryParamArgs {
  if (!binding.value || binding.value instanceof Function) {
    const args = el.tagName in defaultArgs ? defaultArgs[el.tagName] : defaultArgs['DEFAULT']
    const { handler, ...params } = args
    if (binding.value) return { handler: binding.value, ...params }
    return { handler, ...params }
  } else {
    return Object.assign({}, defaultArgs["DEFAULT"], binding.value)
  }
}

function handler(el: HTMLElement, binding: Binding, action: Action) {
  const args = getArgs(el, binding)
  
  function eventHandler(evt: Event) {
    const rawValue = args.target(evt.target)
    const formattedValue = args.format(rawValue)
    setValueToURL(binding.arg, formattedValue)
  }

  if (action == Action.Add)
    el.addEventListener(args.event!, eventHandler)
  else if(action == Action.Remove)
    el.removeEventListener(args.event!, eventHandler)
}

const vQueryParam = {
  name: 'v-query-param',
  // Return the query-param from url
  created(el: HTMLInputElement, binding: Binding) {
    if (binding.value) {
      if (binding.value instanceof Function) {
        binding.value(binding.arg, getValueFromURL(binding.arg))
      } else {
        const args = getArgs(el, binding)
        args.handler?.(binding.arg, getValueFromURL(binding.arg))
      }
    }
  },
  mounted(el: HTMLElement, binding: Binding) {    
    handler(el, binding, Action.Add)
  },
  beforeUnmounted(el: HTMLElement, binding: Binding) {
    handler(el, binding, Action.Remove)
  }
}

export default vQueryParam
