import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import routes from './routes'

import store from './store/index'

store.dispatch("loadToken");

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  console.log('Routing')
  console.log(store.getters.hasPlayerLoggedIn)

  if (!store.getters.hasPlayerLoggedIn && to.meta.requiresLoggedPlayer) { next({ name: 'login' }) }
  else {
    next()
  }
  window.scroll(0, 0)
}
)

new Vue({
  vuetify,
  router,
  render: h => h(App),
  store: store,
}).$mount('#app')
