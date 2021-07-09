import VirtualTree from './components/VirtualTree.vue'

export default function (Vue, opts = {}) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('VirtualTree', VirtualTree)
  }
  Vue.component(opts.name || 'VirtualTree', VirtualTree)
}
