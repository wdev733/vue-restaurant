import mutations from '../../../../src/store/restaurants/mutations'
const { incrementPage,
  decrementPage,
  setPage,
  setPageSize,
  setRestaurantName,
  toggleOpenDetailsModal,
  toggleOpenUpdateModal,
  setImageCurrentRestaurant,
  setRestaurants
} = mutations;

describe('Restaurants mutations', function () {
  let state;

  beforeEach(() => {
    state = {table: {page: 10,pageSize: 10},
      restaurantName: 'a',
      modals: {openDetailsModal: false, openUpdateModal: false},
      imageCurrentRestaurant: null,
      all: [],
      count: 0,
    };
  });

  it('should increment page' , () => {
    incrementPage(state);

    expect(state.table.page).toBe(11);
  });

  it('should decrement page' , () => {
    decrementPage(state);

    expect(state.table.page).toBe(9);
  });

  it('should set page', () => {
    setPage(state, 6);

    expect(state.table.page).toBe(6);
  });

  it('should setPageSize', () => {
    setPageSize(state, 20);

    expect(state.table.pageSize).toBe(20);
  });

  it('should setRestaurantName', () => {
    setRestaurantName(state, 'test');

    expect(state.restaurantName).toBe('test');
  });

  it('should toggleOpenDetailsModal', () => {
    toggleOpenDetailsModal(state);

    expect(state.modals.openDetailsModal).toBeTruthy();

    toggleOpenDetailsModal(state);

    expect(state.modals.openDetailsModal).toBeFalsy();
  });

  it('should toggleOpenUpdateModal', () => {
    toggleOpenUpdateModal(state);

    expect(state.modals.openUpdateModal).toBeTruthy();

    toggleOpenUpdateModal(state);

    expect(state.modals.openUpdateModal).toBeFalsy();
  });

  it('should setImageCurrentRestaurant', () => {
    setImageCurrentRestaurant(state, 'test');

    expect(state.imageCurrentRestaurant).toBe('test');
  });

  it('should setRestaurants', () => {
    setRestaurants(state, {data: [{}], count: 1});
    expect(state.count).toBe(1);
  });

});
