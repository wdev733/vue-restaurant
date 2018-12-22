const actions = {
      changeIntoCart({ commit, rootState }, { num, menu }) {
            const {
                  selected: { _id, name }
            } = rootState.restaurants;
            const restaurantSelected = { _id, name, products: [] };

            commit("setRestaurantCart", { num, restaurantSelected });
            commit("setCountCart", { num, menu, _id });
      }
};

export default actions;
