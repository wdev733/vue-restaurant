import restaurants from '../../api/restaurants';

const actions = {
    async getAll({ commit }, page, pageSize, restaurantName) {        
        const { data, count } = await restaurants.getAll(page, pageSize, restaurantName);
        commit('setRestaurants', {data, count});
    },
    setPage: ({ commit }, payload) => commit('setPage', payload),
    incrementPage: ({ commit, state }) => {
        const { count, table: { pageSize, page } } = state;
        const totalPages = Math.round(count / pageSize);
        page < totalPages && commit('incrementPage');
    },
    decrementPage: ({ commit, state }) => {
        const { table: { page } } = state;
        page > 1 && commit('decrementPage');
    },
    firstPage: ({ commit }) => commit('setPage', 1),
    lastPage: ({ commit, state }) => {
        const { count, table: { pageSize } } = state;
        const totalPages = Math.round(count / pageSize);
        commit('setPage', totalPages);
    },
    setPageSize: ({ commit }, payload) => commit('setPageSize', payload),
}

export default actions;