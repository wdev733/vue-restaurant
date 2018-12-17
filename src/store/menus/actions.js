import theMealDB from '../../api/theMealDB'

const actions = {
    async getCategories({ commit }) {        
        const { categories } = await theMealDB.getCategories();
        commit('setCategories', categories);
    },
}

export default actions;