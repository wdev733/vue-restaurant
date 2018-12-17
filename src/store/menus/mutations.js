const mutations = {
    setCategories: (state, payload) => state.categories.all = payload,
    setCategorieSelected: (state, payload) => state.categories.selected = payload,
    setMenuSelected: (state, payload) => state.selected = payload,
    setMenus: (state, payload) => {
        payload.length > 0 && payload.forEach(element => {
            element.price = +(Math.random() * (25 - 5) + 5).toFixed(2);
        });
        state.all = payload;
    },
}

export default mutations;