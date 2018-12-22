const mutations = {
  setAll: (state, payload) => (state.all = payload),

  setRestaurantCart: (state, { num, restaurantSelected }) => {
    if (state.all.length > 0) {
      const existing = state.all.find(
        restaurant => restaurant._id === restaurantSelected._id
      );

      if (existing && existing.products.length <= 1 && num == 0) {
        state.all.splice(0, 1);
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
            if (num === 0) {
              restaurant.products.filter((menu, index) => {
                return (
                  menu.idMeal === item.idMeal &&
                  restaurant.products.splice(index, 1)
                );
              });
            }
            return (existing.count = num);
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
