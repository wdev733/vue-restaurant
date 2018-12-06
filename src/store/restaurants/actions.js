import restaurants from '../../api/restaurants';

const actions = {
    async getAll({ commit }) {
        const { data, count } = await restaurants.getAll();
        commit('setRestaurants', { data, count });
    }
}

export default actions;