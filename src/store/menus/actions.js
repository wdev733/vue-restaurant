import theMealDB from '../../api/theMealDB'

const actions = {
    async getCategories({ commit }) {        
        const { categories } = await theMealDB.getCategories();
        commit('setCategories', categories);
    },
    async getMenubyCategorie({ commit }, menu) {  
        commit('setMenus', []);     
        const { meals } = await theMealDB.getMenubyCategorie(menu);
        commit('setMenus', meals);
    },
}

export default actions;