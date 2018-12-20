const actions = {
  addIntoCart({ commit, rootState }, { num, menu }) {
    const {
      selected: { restaurant_id, name }
    } = rootState.restaurants;
    const restaurantSelected = { restaurant_id, name, products: [] };

    commit("setRestaurantCart", restaurantSelected);
    commit("setCountCart", { num, menu, restaurant_id });
  },

  /* getCountProduct({ rootState }, idMeal) {
      const {
        cart: { all: restaurants },
        restaurants: { selected: { restaurant_id } }
      } = rootState;

      if (restaurants.length > 0) {
          const restaurant = restaurants.find(restaurant => restaurant.restaurant_id === restaurant_id);

          if (restaurant.products > 0) {
              const { count } = restaurant.products.find(product => product.idMeal == idMeal);
              return count;
          } else {
              return 0;
          } 

      } else {
          return 0;
      }
  } */
};

export default actions;
