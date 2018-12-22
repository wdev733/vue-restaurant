const actions = {
  changeIntoCart({ commit, rootState }, { num, menu }) {
    const {
      selected: { restaurant_id, name }
    } = rootState.restaurants;
    const restaurantSelected = { restaurant_id, name, products: [] };

    commit("setRestaurantCart", { num, restaurantSelected });
    commit("setCountCart", { num, menu, restaurant_id });
  }
};

export default actions;
