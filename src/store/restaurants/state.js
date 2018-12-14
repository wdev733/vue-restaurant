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
        }
    },
    restaurantName: null,
    openModal: false,
}

export default state;