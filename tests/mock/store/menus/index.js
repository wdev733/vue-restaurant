const state = {
  categories: {
    selected: {strCategory: 'Oui'},
    all: [{strCategory: 'Oui'}],
  },
  selected: {strCategory: 'Oui'},
  all: [{strCategory: 'Oui'}],
};

const actions = {
  initMenuTab: jest.fn().mockImplementation(() => {

  }),
  getCategories: jest.fn().mockImplementation(() => {

  }),
  getMenubyCategorie: jest.fn().mockImplementation(() => {

  }),
  setCountProductsFromMenus: jest.fn().mockImplementation(() => {

  }),
  setCountMenus: jest.fn().mockImplementation(() => {

  }),
};

export default {
  state,
  actions,
}
