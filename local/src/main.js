import Vue from 'vue'
import App from '@/App.vue'
import LoadingComponent from "@/components/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent";

Vue.config.productionTip = false

const CustomButton = () => ({
  component: import('remote/CustomButton'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})

Vue.component('custom-button', CustomButton)

new Vue({
  render: h => h(App),
}).$mount('#app')

