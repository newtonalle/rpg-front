import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import routes from './routes'

import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
