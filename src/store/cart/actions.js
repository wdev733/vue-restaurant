const actions = {
  setCountCart({ commit, rootState }, { num, menu }) {
    const {
      selected: { restaurant_id }
    } = rootState.restaurants;
    commit("setCountCart", { num, menu, restaurant_id });
  },

  setRestaurantCart({ commit, rootState }) {
    const {
      selected: { restaurant_id, name }
    } = rootState.restaurants;
    const restaurantSelected = { restaurant_id, name, products: [] };
    commit("setRestaurantCart", restaurantSelected);
  },

  addIntoCart({ dispatch }, { num, menu }) {
    dispatch("setRestaurantCart");
    dispatch("setCountCart", { num, menu });
  }
};

export default actions;
