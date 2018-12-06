const mutations = {
  setRestaurants (state, {data, count}) {
    state.all = data
    state.count = count
  },
}

export default mutations;