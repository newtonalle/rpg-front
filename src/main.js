import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

import FlowyPlugin from "@hipsjs/flowy-vue";
import "@hipsjs/flowy-vue/dist/lib/flowy-vue.css";

import App from './App.vue'
import routes from './routes'

import store from './store/index'
import Node from "./pages/Map/components/Node.vue"

store.dispatch("loadToken");

Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(FlowyPlugin)

Vue.component("map-node", Node)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  console.log('Routing')
  console.log(store.getters.hasUserLoggedIn)

  if (!store.getters.hasUserLoggedIn && to.meta.requiresLoggedUser) { next({ name: 'login' }) }
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
