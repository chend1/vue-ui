import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './assets/css/base.css'
import VueUi from 'vue-two-ui'
import 'vue-two-ui/vue-two-ui.css'
Vue.config.productionTip = false
Vue.use(VueUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
