import { getValueFromURL, setValueToURL } from "./history";

// const vQueryParam = {
//   mounted(el: HTMLInputElement, binding, vnode, prevNode) {
//     el.addEventListener("input", (evt) => {
//       setValueToURL(binding.arg, evt.target.value)
//     })
//   }
// }

const vQueryParam = {
  name: 'v-query-param',
  mounted(el: HTMLInputElement, binding, vnode, prevNode) {
    console.log(el);
    
    el.addEventListener("input", (evt) => {
      console.log(evt);
      
      setValueToURL(binding.arg, evt.target?.value)
    })
  }
}

export default vQueryParam
