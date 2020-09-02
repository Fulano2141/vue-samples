import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'

// Vue.config.productionTip = false

var vm = new Vue({
  render: h => h(App),
}).$mount('#app')


var vm2 = new Vue({
  render: g => g(App2),
}).$mount("#apptwo")

console.log(vm.title + " " + vm2.title);