const mutations = {
    setAll: (state, payload) => state.all = payload,
    setCount: (state, {num, menu: item}) => {
        if(state.all.length > 0) {
            const existing = state.all.find(menu => +menu.idMeal === +item.idMeal);
            if(existing) {
                if(num === 0) {
                    return state.all.filter((menu, index) => {
                        +menu.idMeal === +item.idMeal && state.all.splice(index, 1);
                    });
                }
                return existing.count = num;
            } else {
                item.count++;
                return state.all.push(item);
            }
        } else {
            item.count++;
            return state.all.push(item);
        }
    },
}

export default mutations;