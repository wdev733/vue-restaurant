const mutations = {
    setRestaurants (state, {data, count}) {
        state.all = data;
        state.count = count;
    },
    setPage: (state, payload) => state.table.page = payload,
    incrementPage: state => state.table.page++,
    decrementPage: state => state.table.page--,
    setPageSize: (state, payload) => state.table.pageSize = payload,
    setRestaurantName: (state, payload) => state.restaurantName = payload,
}

export default mutations;