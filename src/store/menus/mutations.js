const mutations = {
    setCategories: (state, payload) => state.categories.all = payload,
    setCategorieSelected: (state, payload) => state.categories.selected = payload,
    setMenuSelected: (state, payload) => state.selected = payload,
    setMenus: (state, payload) => {
        payload.length > 0 && payload.forEach(element => {
            element.count = 0;
            element.price = +(Math.random() * (25 - 5) + 5).toFixed(2);
        });
        state.all = payload;
    },

    setCountProductsFromMenus: (state, { restaurant_id, cartRestaurants }) => {
        const menus = state.all;
        menus.length > 0 && menus.forEach(menu => {
            cartRestaurants.length > 0 && cartRestaurants.forEach(restaurant => {
                if(restaurant_id === restaurant.restaurant_id && restaurant.products.length > 0) {
                    restaurant.products.forEach(product => {
                        if(+menu.idMeal == +product.idMeal) {
                            menu.count = product.count;
                        }
                    })
                } else {
                    return;
                }
            });
        });
    },

    setCountMenus: (state, { num, menu }) => {
        state.all.forEach(element => {
            if(+element.idMeal === +menu.idMeal) {
                element.count = num
            }
        });
    }
}

export default mutations;