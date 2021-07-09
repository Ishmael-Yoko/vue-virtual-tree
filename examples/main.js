import Vue from 'vue'
import App from './App.vue'
import VirtualTree from './../lib'

Vue.config.productionTip = false
Vue.use(VirtualTree)
new Vue({
  render: h => h(App)
}).$mount('#app')
