import Vue from 'vue';
import Vuex from 'vuex';
import restaurants from './restaurants';
import cart from './cart';
import menu from './menus';

Vue.use(Vuex);

export default {
  store: new Vuex.Store({
    modules: {
      restaurants: {
        namespaced: true,
        state: restaurants.state,
        getters: restaurants.getters
      },
      menus: {
        namespaced: true,
        state: menu.state,
        actions: menu.actions,
      },
      cart: {
        namespaced: true,
        state: cart.state,
        actions: cart.actions
      }
    }
  }),
  mock: {
    restaurants: {
      namespaced: true,
      state: restaurants.state,
      getters: restaurants.getters
    },
    menus: {
      namespaced: true,
      state: menu.state,
      actions: menu.actions,
    },
    cart: {
      namespaced: true,
      state: cart.state,
      actions: cart.actions
    }
  }
};
