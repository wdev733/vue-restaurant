import Vue from 'vue'
import Vuex from 'vuex'
import restaurants from './restaurants'
import menus from './menus'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        restaurants,
        menus,
    },
    strict: debug,
})