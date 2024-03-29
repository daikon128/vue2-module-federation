import Vue from 'vue'
import App from '@/App.vue'
import LoadingComponent from "@/components/LoadingComponent";
import ErrorComponent from "@/components/ErrorComponent";

Vue.config.productionTip = false

const TodoList = () => ({
  component: import('remote2/TodoList'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})

Vue.component('todo-list', TodoList)

const TodoSearch = () => ({
  component: import('remote2/TodoSearch'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})

Vue.component('todo-search', TodoSearch)

const BigAdsense = () => ({
  component: import('remote/BigAdsense'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 3000
})

Vue.component('big-adsense', BigAdsense)


new Vue({
  render: h => h(App),
}).$mount('#app')

