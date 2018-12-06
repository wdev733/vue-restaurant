const mutations = {
  setRestaurants (state, {data, count}) {
      state.all = data;
      state.count = count;
  },
  setPage: (state, payload) => state.table.page = payload,
  setPageSize: (state, payload) => state.table.pageSize = payload,
}

export default mutations;