const actions = {
  addIntoCart({ commit, rootState }, { num, menu }) {
    const {
      selected: { restaurant_id, name }
    } = rootState.restaurants;
    const restaurantSelected = { restaurant_id, name };

    commit("setRestaurantCart", restaurantSelected);
    commit("setCountCart", { num, menu, restaurant_id });
  },

  /* async getCountProduct({ rootState }, idMeal) {
    const {
      cart: { all: restaurants },
      restaurants: {
        selected: { restaurant_id }
      }
    } = rootState;
    console.log("idMeal : ", +idMeal, "restaurant_id : ", +restaurant_id);
    const restaurant = await restaurants.find(
      restaurant => +restaurant.restaurant_id === +restaurant_id
    );

    console.log("restaurant : ", restaurant);
    if (restaurant.products > 0) {
      const { count } = await restaurant.products.find(
        product => product.idMeal == idMeal
      );
      return count;
    } else {
      return 0;
    }
  } */

  getCountProduct({ rootState }, idMeal) {
    const {
      cart: { all: restaurants },
      restaurants: {
        selected: { restaurant_id }
      }
    } = rootState;

    //console.log("getCountProduct: ", idMeal);

    if (restaurants.length > 0) {
      console.log("restaurants: ", restaurants);
    } else {
      return 0;
    }

    //console.log("idMeal : ", +idMeal, "restaurant_id : ", +restaurant_id);
    /* const restaurant = await restaurants.find(
      restaurant => restaurant.restaurant_id === restaurant_id
    ); */

    /* const restaurant = restaurants.find(restaurant => {
      console.log(
        "restaurant.restaurant_id : ",
        +restaurant.restaurant_id,
        "restaurant_id : ",
        +restaurant_id
      );
      if (restaurant.restaurant_id === restaurant_id) {
        console.log(restaurant);
        return restaurant;
      }
    }); */

    //console.log("restaurant : ", restaurant);
    /* if (restaurant.products > 0) {
      const { count } = await restaurant.products.find(
        product => product.idMeal == idMeal
      );
      return count;
    } else {
      return 0;
    } */
  }
};

export default actions;
