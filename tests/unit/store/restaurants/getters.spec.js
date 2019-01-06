import getters from '../../../../src/store/restaurants/getters';

describe('Restaurants getters', function () {
  let state;

  beforeEach(() => {
    state = {
      selected: { _id: '1234', address: { coord: 'addr' }},
      table: { page: 1, pageSize: 10 }
    };
  });

  it('should get selected restaurant', () => {
    expect(getters.restaurantSelected(state)._id).toBe('1234');
  });

  it('should get coord', () => {
    expect(getters.coordRestaurantSelected(state)).toBe('addr');
  });

  it('should get page size', () => {
    expect(getters.pageSize(state)).toBe(10);
  });

  it('should get page', () => {
    expect(getters.page(state)).toBe(1);
  })
});
