const mutations = {
  setRestaurants (state, {data, count}) {
    state.all = data;
    state.count = count;
  },
  setPage (state, payload) {}
}

export default mutations;