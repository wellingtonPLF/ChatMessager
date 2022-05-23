import Vue from 'vue'
import App from './App.vue'
import ActionCableVue from 'actioncable-vue'
import router from './router'
import { Usuario } from './shared/model/Usuario'

Vue.use(ActionCableVue, {
  debug: true,
  debugLevel: 'error',
  connectionUrl: 'ws://localhost:5000',
  connectImmediately: true
})

Vue.prototype.$Usuario = new Usuario()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
