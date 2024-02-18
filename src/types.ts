import { VueElement } from "vue"

export interface QueryParamArgs {
  handler: Function | null
  format: Function
  event: string
  target: Function
}

export type QueryParamArgsOptions = {
  [key: string]: QueryParamArgs
}

export interface Binding {
  value: Function | QueryParamArgs
  oldValue: Function | QueryParamArgs
  arg: string
  modifiers: object
  instance: VueElement
  dir: object
} 
