import Vue from 'vue'
import Sandbox from './sandbox/Sandbox.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Sandbox),
}).$mount('#app')

import("./bootstrap");