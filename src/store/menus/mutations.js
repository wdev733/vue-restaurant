const mutations = {
    setCategories: (state, payload) => state.categories.all = payload,
    setCategorieSelected: (state, payload) => state.categories.selected = payload,
    setMenus: (state, payload) => state.all = payload,
    setMenuSelected: (state, payload) => state.selected = payload,
}

export default mutations;