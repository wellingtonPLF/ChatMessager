import Vue from 'vue'
import App from './App.vue'
import ActionCableVue from 'actioncable-vue'
import router from './router'

Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'error',
  connectionUrl: 'ws://localhost:5000',
  connectImmediately: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
