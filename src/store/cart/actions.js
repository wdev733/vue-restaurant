const actions = {
  changeIntoCart({ commit, dispatch, rootState }, { num, menu }) {
    const {
      selected: { _id, name }
    } = rootState.restaurants;
    const restaurantSelected = { _id, name, products: [] };

    commit("setRestaurantCart", { num, restaurantSelected });
    commit("setCountCart", { num, menu, _id });
    dispatch("setLocalStorage");
  },

  setLocalStorage({ state }) {
    const { all } = state;
    localStorage.setItem("cart", JSON.stringify(all));
  },

  initLocalStorage({ commit }) {
    const cartLocalStorage = localStorage.getItem("cart");
    commit("setAll", cartLocalStorage ? JSON.parse(cartLocalStorage) : []);
  }
};

export default actions;
