import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

console.log(getters)

Vue.use(Vuex)

const store = new Vuex.Store({
    state: state(),
    getters,
    mutations,
    actions,
})

export default store