import Vue from 'vue'
import Vuex from 'vuex'
import restaurants from './restaurants'
import menus from './menus'
import cart from './cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        restaurants,
        menus,
        cart,
    },
    strict: debug,
})