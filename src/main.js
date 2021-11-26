import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/permission'
import 'nprogress/nprogress.css'
import store from './store'
import './assets/reset.css'
import './utils/element'
import '../theme/index.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
