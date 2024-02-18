import { VueElement } from "vue"

export interface QueryParamArgs {
  model: string
  callback: Function | null
  format: Function
}

export interface Binding {
  value: Function | QueryParamArgs
  oldValue: Function | QueryParamArgs
  arg: string
  modifiers: object
  instance: VueElement
  dir: object
} 
