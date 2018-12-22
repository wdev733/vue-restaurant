import theMealDB from "../../api/theMealDB";

const actions = {
  async initMenuTab({ commit, dispatch, state }) {
    await dispatch("getCategories");
    const {
      categories: { all }
    } = state;
    const firstCategory = all[0].strCategory;
    commit("setCategorieSelected", firstCategory);
    await dispatch("getMenubyCategorie", firstCategory);
  },

  async getCategories({ commit }) {
    const { categories } = await theMealDB.getCategories();
    commit("setCategories", categories);
  },

  async getMenubyCategorie({ commit, dispatch }, category) {
    commit("setMenus", []);
    commit("setCategorieSelected", category);
    const { meals } = await theMealDB.getMenubyCategorie(category);
    commit("setMenus", meals);
    dispatch("setCountProductsFromMenus");
  },

  setCountProductsFromMenus({ commit, rootState }) {
    const {
      cart: { all },
      restaurants: {
        selected: { _id }
      }
    } = rootState;
    commit("setCountProductsFromMenus", { _id, cartRestaurants: all });
  },

  setCountMenus({ commit }, { num, menu }) {
    commit("setCountMenus", { num, menu });
  }
};

export default actions;
