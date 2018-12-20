const mutations = {
  setAll: (state, payload) => (state.all = payload),

  setRestaurantCart: (state, payload) => {
    if (state.all.length > 0) {
      const existing = state.all.find(
        restaurant => +restaurant.restaurant_id === +payload.restaurant_id
      );

      !existing && state.all.push(payload);
    } else {
      state.all.push(payload);
    }
  },

  setCountCart: (state, { num, menu: item, restaurant_id }) => {
    state.all.forEach(restaurant => {
      if (restaurant.restaurant_id === restaurant_id) {
        if (restaurant.products.length > 0) {
          const existing = restaurant.products.find(
            menu => +menu.idMeal === +item.idMeal
          );
          if (existing) {
            if (num === 0) {
              restaurant.products.filter((menu, index) => {
                return (
                  +menu.idMeal === +item.idMeal &&
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

  /* setCount: (state, { num, menu: item, restaurantSelected }) => {
    if (state.all.length > 0) {
      const existing = state.all.find(menu => +menu.idMeal === +item.idMeal);
      if (existing) {
        if (num === 0) {
          state.all.filter((menu, index) => {
            return +menu.idMeal === +item.idMeal && state.all.splice(index, 1);
          });
        }
        return (existing.count = num);
      } else {
        item.restaurant = restaurantSelected;
        item.count++;
        return state.all.push(item);
      }
    } else {
      item.restaurant = restaurantSelected;
      item.count++;
      return state.all.push(item);
    }
  } */
};

export default mutations;
