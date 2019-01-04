const state = {
    table: {
        page: 1,
        pageSize: 10,
    },
    count: 2,
    all: [{
      name: 'Test',
      cuisine: 'Cuisine test',
      address: {
        coord: [],
        street: '8 avenue de picardie',
        zipcode: '06000',
        building: '2',
      },
      borough: '1111',
      restaurant_id: '1',
      _id: '111',
    }, {
      name: 'Test 2',
      cuisine: 'Cuisine test 2',
      address: {
        coord: [],
        street: '10 avenue de picardie',
        zipcode: '06001',
        building: '2',
      },
      borough: '1111',
      restaurant_id: '1',
      _id: '112',
    }],
    selected: {
        name: 'Test',
        cuisine: 'Cuisine test',
        address: {
            coord: [],
            street: '8 avenue de picardie',
            zipcode: '06000',
            building: '2',
        },
        borough: '1111',
        restaurant_id: '1',
        _id: '111',
    },
    restaurantName: null,
    modals: {
        openDetailsModal: false,
        openUpdateModal: false,
    },
    imageCurrentRestaurant: 'test',
};

const getters = {
    restaurantSelected: jest.fn().mockReturnValue(state.selected),
    coordRestaurantSelected: jest.fn().mockReturnValue(state.selected.address.coord),
    page: jest.fn().mockReturnValue(state.table.page),
    pageSize: jest.fn().mockReturnValue(state.table.pageSize),
};


export default {
    namespaced: true,
    state,
    getters,
};
