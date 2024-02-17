import type { Plugin } from "vue"
import { vQueryParam } from "./components"


export const vQueryParamPlugin: Plugin = {
  install(Vue) {
    Vue.directive(vQueryParam.name)    
  },
}

export * from "./components"
export default vQueryParamPlugin