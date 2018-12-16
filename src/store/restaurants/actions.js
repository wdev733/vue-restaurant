import initialState from './state';

import restaurants from '../../api/restaurants';
import qwant from '../../api/qwant';

const actions = {
    async getAll({ commit }, page, pageSize, restaurantName) {        
        const { data, count } = await restaurants.getAll(page, pageSize, restaurantName);
        commit('setRestaurants', {data, count});
    },
    async getById({ commit }, id) {      
        const { restaurant } = await restaurants.getById(id);
        commit('setRestaurant', restaurant);
    },
    async getImageCurrentRestaurant({ commit }, name) {
        const { data: { result: { items } } } = await qwant.image(name);
        const { media } = items.find(item => item);
        commit('setImageCurrentRestaurant', media);
    },
    async create({ dispatch, state }, formData) {
        const { restaurantName, table: { pageSize, page } } = state;
        const response = await restaurants.create(formData);
        dispatch('getAll', {page, pageSize, restaurantName});
        return response;
    },
    async update({ dispatch, state }, id, formData) {
        const { restaurantName, table: { pageSize, page } } = state;
        const response = await restaurants.update(id, formData);
        dispatch('getAll', {page, pageSize, restaurantName});
        return response;
    },
    async delete({ dispatch, state }, id) {
        const { restaurantName, table: { pageSize, page } } = state;
        const response = await restaurants.delete(id);
        dispatch('getAll', {page, pageSize, restaurantName});
        return response;
    },
    setPage: ({ commit }, payload) => commit('setPage', payload),
    incrementPage: ({ commit, dispatch, state }) => {
        const { count, restaurantName, table: { pageSize, page } } = state;
        const totalPages = Math.round(count / pageSize);
        if (page < totalPages) {
            commit('incrementPage');
            dispatch('getAll', {page, pageSize, restaurantName});
        }
    },
    decrementPage: ({ commit, dispatch, state }) => {
        const { restaurantName, table: { page, pageSize } } = state;
        if (page > 1) {
            commit('decrementPage');
            dispatch('getAll', {page, pageSize, restaurantName});
        }
    },
    firstPage: ({ commit, dispatch, state }) => {
        commit('setPage', 1);
        const { restaurantName, table: { page, pageSize } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    lastPage: ({ commit, dispatch, state }) => {
        const { count, table: { pageSize } } = state;
        const totalPages = Math.round(count / pageSize);
        commit('setPage', totalPages);
        const { restaurantName, table: { page } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    setPageSize: ({ commit, dispatch, state }, payload) => {
        commit('setPageSize', payload);
        commit('setPage', 1);
        const { restaurantName, table: { page, pageSize } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    setRestaurantName: ({ commit }, payload) => commit('setRestaurantName', payload),
    refreshRestaurants: ({ commit, dispatch, state }) => {
        commit('setPageSize', 10);
        commit('setPage', 1);
        commit('setRestaurantName', null);
        const { restaurantName, table: { page, pageSize } } = state;
        dispatch('getAll', {page, pageSize, restaurantName});
    },
    clearRestaurantSelected: ({ commit }) => {
        commit('setRestaurant', initialState.selected);
        commit('setImageCurrentRestaurant', null);
    },
    toggleOpenDetailsModal: ({ commit, dispatch, state }) => {
        const { modals: { openDetailsModal } } = state;
        commit('toggleOpenDetailsModal');
        !openDetailsModal && dispatch('clearRestaurantSelected');
    },
    toggleOpenUpdateModal: ({ commit, dispatch, state }) => {
        const { modals: { openUpdateModal } } = state;
        commit('toggleOpenUpdateModal');
        !openUpdateModal && dispatch('clearRestaurantSelected');
    },
}

export default actions;