import Vuex from 'vuex';
import Vue from 'vue'

import Element from 'element-ui'
import Index from '../../../../src/containers/RestaurantModal/index.vue';
import {shallowMount, createLocalVue} from '@vue/test-utils';
import locale from 'element-ui/lib/locale/lang/fr'
import fakeStore from '../../../mock/store/index';

Vue.use(Element, {locale});

const localVue = createLocalVue();

localVue.use(Vuex);

describe('InformationTab', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = fakeStore.store;

    wrapper = shallowMount(Index, {
      store: store,
      localVue
    });
  });

  test('openModal should not be null', () => {
    expect(wrapper.vm._computedWatchers.openModal.value).toBeDefined();
  });

  test('restaurantSelected should be called', () => {
    expect(fakeStore.mock.restaurants.getters.restaurantSelected).toHaveBeenCalled();
  });
});
