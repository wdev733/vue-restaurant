import restaurants from '../../api/restaurants';

const actions = {
    async getAll({ commit }, page, pageSize, restaurantName) {        
        const { data, count } = await restaurants.getAll(page, pageSize, restaurantName);
        commit('setRestaurants', {data, count});
    },
    setPage: ({ commit }, payload) => commit('setPage', payload),
    incrementPage: ({ commit, dispatch, state }) => {
        const { count, restaurantName, table: { pageSize, page } } = state;
        const totalPages = Math.round(count / pageSize);
        if (page < totalPages) {
            commit('incrementPage');
            dispatch('getAll', {page, pageSize, restaurantName});
        }
    },
    decrementPage: ({ commit, dispatch, state }) => {
        const { restaurantName, table: { page, pageSize } } = state;
        if (page > 1) {
            commit('decrementPage');
            dispatch('getAll', {page, pageSize, restaurantName});
        }
    },
    firstPage: ({ commit, dispatch, state }) => {
        commit('setPage', 1);
        const { restaurantName, table: { page, pageSize } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    lastPage: ({ commit, dispatch, state }) => {
        const { count, table: { pageSize } } = state;
        const totalPages = Math.round(count / pageSize);
        commit('setPage', totalPages);
        const { restaurantName, table: { page } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    setPageSize: ({ commit, dispatch, state }, payload) => {
        commit('setPageSize', payload);
        commit('setPage', 1);
        const { restaurantName, table: { page, pageSize } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    setRestaurantName: ({ commit }, payload) => commit('setRestaurantName', payload),
}

export default actions;