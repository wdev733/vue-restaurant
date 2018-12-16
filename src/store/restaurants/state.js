const state = {
    table: {
        page: 1,
        pageSize: 10,
    },
    count: 0,
    all: [],
    selected: {
        name: '',
        cuisine: '',
        address: {
            coord: [],
            street: '',
            zipcode: '',
            building: '',
        },
        borough: '',
        restaurant_id: '',
        _id: '',
    },
    restaurantName: null,
    modals: {
        openDetailsModal: false,
        openUpdateModal: false,
    },
    imageCurrentRestaurant: null,
}

export default state;