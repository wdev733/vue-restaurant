const mutations = {
    setAll: (state, payload) => state.all = payload,
    add: (state, payload) => {
        if(state.all.length > 0) {
            const existing = state.all.find(menu => +menu.idMeal === +payload.idMeal);
            if(existing) {
                return existing.count++
            } else {
                payload.count = 1;
                return state.all.push(payload);
            }
        } else {
            payload.count = 1;
            return state.all.push(payload);
        }
    },
}

export default mutations;