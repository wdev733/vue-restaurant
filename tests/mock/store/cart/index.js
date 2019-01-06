const actions = {
  changeIntoCart: jest.fn().mockImplementation(() => {

  }),
  setLocalStorage: jest.fn().mockImplementation(() => {

  }),
  initLocalStorage: jest.fn().mockImplementation(() => {

  }),
};

const state = {
  all: [{test: 'aaa'}],
};


export default {
  namespaced: true,
  state,
  actions,
};
