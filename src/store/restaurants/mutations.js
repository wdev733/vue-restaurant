const mutations = {
    setRestaurants (state, {data, count}) {
        state.all = data;
        state.count = count;
    },
    setRestaurant: (state, payload) => state.selected = payload,
    setPage: (state, payload) => state.table.page = payload,
    incrementPage: state => state.table.page++,
    decrementPage: state => state.table.page--,
    setPageSize: (state, payload) => state.table.pageSize = payload,
    setRestaurantName: (state, payload) => state.restaurantName = payload,
    toggleOpenModal: state => state.openModal = !state.openModal,
}

export default mutations;