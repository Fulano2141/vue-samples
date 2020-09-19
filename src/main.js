// import Vue from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'

// Vue.config.productionTip = false

// var vm1 = 
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


// var vm2 = new Vue({
//   el: "#apptwo",  // This #apptwo is from index.html
//   render: g => g(App2),
// })

// console.log(vm1.title + " " + vm2.title);

// // https://jsfiddle.net/smax/9a2k6cja/2/
//  =====================================================
// import Vue from 'vue'
// import App from './App.vue'
// import Home from './components/basic/Home.vue'

// Vue.component('server-status', Home)

// export const eventBus = new Vue({
//   methods: {
//     changeAge(age) {
//       this.$emit('ageWasEdited', age);
//     }
//   }
// }); // can be used for comunicate two children

// new Vue({
//   el: '#app',
//   render: h => h(App) 
// })

// ===============================
import Vue from 'vue'
import App from './App.vue'

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
    }   //[3]
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
// 

// For Filters
Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});
// 
// For Mixins
Vue.mixin({
  created() {
    console.log('global mixin')
  }
});
// 
new Vue({
  el: '#app',
  render: h => h(App)
})