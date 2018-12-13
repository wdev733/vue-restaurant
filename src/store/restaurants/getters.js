const getters = {
    restaurantSelected: state => state.selected,
    page: state => state.table.page,
    pageSize: state => state.table.pageSize,
}

export default getters;