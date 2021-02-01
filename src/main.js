import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {
  routes
} from "./router/router"


Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

// https://jsfiddle.net/smax/9a2k6cja/2/

//  =====================================================
import HomePage from './views/HomePage.vue'

Vue.component('server-status', HomePage)

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
}); // can be used for comunicate two children

// ===============================

// For directives
Vue.directive('highl', {
  bind(el) {
    el.style.backgroundColor = 'green'; //[1]
  }
});
Vue.directive('highli', {
  bind(el, binding) {
    el.style.backgroundColor = binding.value; //[2]
  }
});
Vue.directive('highlig', {
  bind(el, binding) {
    if (binding.arg == 'backgro') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    } //[3]
  }
});
Vue.directive('highligh', {
  bind(el, binding) {
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'backgro') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay); // [4]
  }
});

// For Filters
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});
// 
// For global Mixins
Vue.mixin({
  created() {
    console.log('global mixin')
  }
});
// 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})