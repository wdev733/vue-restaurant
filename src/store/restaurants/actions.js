import restaurants from '../../api/restaurants';

const actions = {
    async getAll({ commit }, page, pageSize, restaurantName) {        
        const { data, count } = await restaurants.getAll(page, pageSize, restaurantName);
        commit('setRestaurants', {data, count});
    },
    setPage: ({ commit }, payload) => commit('setPage', payload),
    setPageSize: ({ commit }, payload) => commit('setPageSize', payload),
}

export default actions;