const actions = {
      changeIntoCart({ commit, rootState }, { num, menu }) {
            const {
                  selected: { _id, restaurant_id, name }
            } = rootState.restaurants;
            const restaurantSelected = {
                  _id,
                  restaurant_id,
                  name,
                  products: []
            };

            commit("setRestaurantCart", { num, restaurantSelected });
            commit("setCountCart", { num, menu, restaurant_id });
      }
};

export default actions;
