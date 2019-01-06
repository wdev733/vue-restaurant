import mutations from '../../../../src/store/cart/mutations'

describe('Cart Mutations', function () {
  let state;

  beforeEach(() => {
    state = {
      all: [{_id: '1', products: []}, {_id: '2', products: []}, {_id: '3', products: [{idMeal: '1', props: '1'}]}]
    };
  });

  it('should set all', () => {
    mutations.setAll(state, ['a', '&', '{}']);

    expect(state.all.length).toBe(3);
  });

  it('should setRestaurantCart and add new', () => {
    let restaurantSelected = {_id: '4'};

    mutations.setRestaurantCart(state, {num: 0, restaurantSelected});

    expect(state.all.length).toBe(4);
  });

  it('should add new cart', () => {
    let restaurantSelected = {_id: '4'};

    state.all = [];

    mutations.setRestaurantCart(state, {num: 0, restaurantSelected});

    expect(state.all.length).toBe(1);
  });

  it('should remove Restaurant Cart', () => {
    let restaurantSelected = {_id: '3'};

    mutations.setRestaurantCart(state, {num: 0, restaurantSelected});

    expect(state.all.length).toBe(2);
  });

  it('should not add Cart', () => {
    mutations.setCountCart(state, { num: 1, menu: {}, _id: '5' });

    expect(state.all[0].products.length).toBe(0);
    expect(state.all[1].products.length).toBe(0);
    expect(state.all[2].products.length).toBe(1);
  });

  it('should add Cart', () => {
    mutations.setCountCart(state, { num: 1, menu: {idMeal: '1'}, _id: '2' });

    expect(state.all[1].products.length).toBe(1);
  });

  it('should update Cart', () => {
    mutations.setCountCart(state, { num: 1, menu: {idMeal: '1', props: '2'}, _id: '3' });

    expect(state.all[2].products.length).toBe(1);
  });
});
