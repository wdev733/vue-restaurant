const actions = {
  changeIntoCart: jest.fn().mockImplementation(() => {

  }),
  setLocalStorage: jest.fn().mockImplementation(() => {

  }),
  initLocalStorage: jest.fn().mockImplementation(() => {

  }),
};

const state = {
  all: [],
};


export default {
  namespaced: true,
  state,
  actions,
};
