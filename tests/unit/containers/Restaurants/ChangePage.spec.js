import Vuex from 'vuex';
import Vue from 'vue'

import Element from 'element-ui'
import ChangePage from '../../../../src/containers/Restaurants/ChangePage';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import locale from 'element-ui/lib/locale/lang/fr'
import fakeStore from '../../../mock/store/index';

Vue.use(Element, {locale});

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ChangePage', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = fakeStore.store;

    wrapper = shallowMount(ChangePage, {
      store: store,
      localVue
    });
  });

  test('count should be 2', () => {
    expect(wrapper.vm._computedWatchers.count.value).toBe(fakeStore.mock.restaurants.state.count);
  });

  test('pageSize should be 10', () => {
    expect(wrapper.vm._computedWatchers.pageSize.value).toBe(fakeStore.mock.restaurants.state.table.pageSize);
  });

  test('page should be 1', () => {
    expect(wrapper.vm._computedWatchers.page.value).toBe(fakeStore.mock.restaurants.state.table.page);
  });

  test('decrementPage should defined', () => {
    expect(wrapper.vm.decrementPage).toBeDefined();
  });

  test('incrementPage should defined', () => {
    expect(wrapper.vm.incrementPage).toBeDefined();
  });

  test('firstPage should defined', () => {
    expect(wrapper.vm.firstPage).toBeDefined();
  });

  test('lastPage should defined', () => {
    expect(wrapper.vm.lastPage).toBeDefined();
  });

  test('changePageSize should defined', () => {
    expect(wrapper.vm.changePageSize).toBeDefined();
  });

  test('refreshRestaurants should defined', () => {
    expect(wrapper.vm.refreshRestaurants).toBeDefined();
  });
});
