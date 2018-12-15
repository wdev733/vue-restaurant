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
    toggleOpenDetailsModal: state => state.modals.openDetailsModal = !state.modals.openDetailsModal,
    toggleOpenUpdateModal: state => state.modals.openUpdateModal = !state.modals.openUpdateModal,
    setImageCurrentRestaurant: (state, payload) => state.imageCurrentRestaurant = payload,
}

export default mutations;