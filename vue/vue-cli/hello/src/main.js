import Vue from 'vue'
import App from './AppAnimate.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
