const mutations = {
    setCategories: (state, payload) => state.categories.all = payload,
    setCategorieSelected: (state, payload) => state.categories.selected = payload,
}

export default mutations;