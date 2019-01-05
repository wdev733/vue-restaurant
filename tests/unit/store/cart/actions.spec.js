import actions from '../../../../src/store/cart/actions'

describe('Cart Actions', function () {
  const emptyDispatch = () => {};
  const emptyCommit = () => {};

  it('should initLocalStorage', (done) => {
    const commit = (name, value) => {
      if (name === 'setAll') {
        expect(true).toBeTruthy();
        done();
      }
    };

    actions.initLocalStorage({commit});
  });

  it('should set localstorage', () => {
    const obj = [];
    const state = { all: obj };

    actions.setLocalStorage({ state });

    expect(localStorage.getItem('cart')).toBe("[]");
  });

  it('should changeIntoCart', (done) => {
    let count = 0;

    const rootState = { restaurants: {selected: { _id: '1', name: 'aaa' }}};
    const params = { num: '1', menu: '' };

    const commit = (name, value) => {
      if (name === 'setRestaurantCart') {
        count++;
        expect(true).toBeTruthy();
      } else if (name === 'setCountCart') {
        count++;
        expect(true).toBeTruthy();
      } else {
        expect(false).toBeTruthy();
        done();
      }

      if (count >= 2) {
        done();
      }
    };

    actions.changeIntoCart({commit, dispatch: emptyDispatch, rootState}, params);
  });
});
