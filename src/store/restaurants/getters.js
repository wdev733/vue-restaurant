const getters = {
    restaurantSelected: state => state.selected,
    coordRestaurantSelected: state => state.selected.address.coord,
    page: state => state.table.page,
    pageSize: state => state.table.pageSize,
}

export default getters;