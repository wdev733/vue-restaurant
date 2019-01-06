import actions from '../../../../src/store/restaurants/actions'

describe('Restaurants actions', function () {
  const emptyDispatch = () => {};
  const emptyCommit = () => {};

  it('should commit increment page', (done) => {

    const commit = (name) => {
      expect(name).toBe('incrementPage');
      done();
    };

    const state = {count: 20, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.incrementPage({commit, dispatch: emptyDispatch, state});
  });

  it('should not commit increment page', (done) => {
    let commitCalled = false;

    const commit = () => {
      commitCalled = true;
      expect(false).toBeTruthy();
      done();
    };

    const state = {count: 10, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.incrementPage({commit, dispatch: emptyDispatch, state});

    setTimeout(() => {
      expect(commitCalled).toBeFalsy();
      done();
    }, 500);
  });

  it('should commit decrement page', (done) => {
    const commit = (name) => {
      expect(name).toBe('decrementPage');
      done();
    };

    const state = {count: 20, restaurantName: '', table: { pageSize: 10, page: 2}};

    actions.decrementPage({commit, dispatch: emptyDispatch, state});
  });

  it('should not commit decrement page', (done) => {
    let commitCalled = false;

    const commit = () => {
      commitCalled = true;
      expect(false).toBeTruthy();
      done();
    };

    const state = {count: 10, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.decrementPage({commit, dispatch: emptyDispatch, state});

    setTimeout(() => {
      expect(commitCalled).toBeFalsy();
      done();
    }, 500);
  });

  it('should firstPage', (done) => {
    const commit = (name, pageNum) => {
      expect(name).toBe('setPage');
      expect(pageNum).toBe(1);
      done();
    };

    const state = {count: 10, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.firstPage({commit, dispatch: emptyDispatch, state})
  });

  it('should lastPage', (done) => {
    const commit = (name, pageNum) => {
      expect(name).toBe('setPage');
      expect(pageNum).toBe(3);
      done();
    };

    const state = {count: 30, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.lastPage({commit, dispatch: emptyDispatch, state})
  });

  it('should setPageSize', (done) => {
    const commit = (name, pageSize) => {
      if (name === 'setPageSize') {
        expect(pageSize).toBe(5);
        done();
      }
    };

    const state = {count: 30, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.setPageSize({commit, dispatch: emptyDispatch, state}, 5)
  });

  it('should set restaurant name', (done) => {
    const commit = (name, rName) => {
      expect(name).toBe('setRestaurantName');
      expect(rName).toBe('test');
      done();
    };

    const state = {count: 30, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.setRestaurantName({commit, dispatch: emptyDispatch, state}, 'test');
  });

  it('should refresh restaurant',(done) => {
    let callCount = 0;

    const commit = (name, value) => {
      callCount ++;

      if (name === 'setPageSize') {
        expect(value).toBe(10)
      } else if (name === 'setPage') {
        expect(value).toBe(1)
      } else {
        expect(value).toBeNull();
      }

      if (callCount === 3) {
        done();
      }
    };

    const state = {count: 30, restaurantName: '', table: { pageSize: 10, page: 1}};

    actions.refreshRestaurants({commit, dispatch: emptyDispatch, state});
  });

  it('should clearRestaurantSelected', (done) => {
    const commit = (name, value) => {
      if (name === 'setImageCurrentRestaurant') {
        expect(value).toBe(null);
        done();
      }
    };

    actions.clearRestaurantSelected({commit})
  });

  it('should toggleOpenDetailsModal', (done) => {
    const commit = (name) => {
      expect(name).toBe('toggleOpenDetailsModal');
      done()
    };

    const state = {modals: {openDetailsModal: true, openUpdateModal: true}};

    actions.toggleOpenDetailsModal({commit, dispatch: emptyDispatch, state});
  });

  it('should toggleOpenUpdateModal', (done) => {
    const commit = (name) => {
      expect(name).toBe('toggleOpenUpdateModal');
      done()
    };

    const state = {modals: {openDetailsModal: true, openUpdateModal: true}};

    actions.toggleOpenUpdateModal({commit, dispatch: emptyDispatch, state});
  });
});
