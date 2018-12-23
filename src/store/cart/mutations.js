const mutations = {
  setAll: (state, payload) => (state.all = payload),

  setRestaurantCart: (state, { num, restaurantSelected }) => {
    if (state.all.length > 0) {
      let existing = null;
      let index = null;

      state.all.forEach((restaurant, i) => {
        if (restaurant._id === restaurantSelected._id) {
          existing = restaurant;
          index = i;
        }
      });

      if (existing && existing.products.length == 1 && num == 0) {
        state.all.splice(index, 1);
      }
      !existing && state.all.push(restaurantSelected);
    } else {
      state.all.push(restaurantSelected);
    }
  },

  setCountCart: (state, { num, menu: item, _id }) => {
    state.all.forEach(restaurant => {
      if (restaurant._id === _id) {
        if (restaurant.products.length > 0) {
          const existing = restaurant.products.find(
            menu => menu.idMeal === item.idMeal
          );
          if (existing) {
            restaurant.products.forEach((menu, index) => {
              if (menu.idMeal === item.idMeal) {
                if (num === 0) {
                  restaurant.products.splice(index, 1);
                } else {
                  menu.count = num;
                }
              }
            });
          } else {
            item.count++;
            return restaurant.products.push(item);
          }
        } else {
          item.count++;
          return restaurant.products.push(item);
        }
      }
    });
  }
};

export default mutations;
