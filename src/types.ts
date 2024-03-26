export interface QueryParamArgs {
  model: string
  callback: Function | null
  format: Function
}

export interface Binding {
  value: string | QueryParamArgs
  oldValue: string | QueryParamArgs
  arg: string
  modifiers: object
  instance: object
  dir: object
} 
