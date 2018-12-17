const mutations = {
    setCategories: (state, payload) => state.categories.all = payload,
    setCategorieSelected: (state, payload) => state.categories.selected = payload,
    setMenus: (state, payload) => state.all = payload,
}

export default mutations;