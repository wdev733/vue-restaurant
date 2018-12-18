const actions = {
    setCount({ commit }, {num, menu}) {
        commit('setCount', {num, menu}); 
    },
}

export default actions;