import Vuex from 'vuex';
import Vue from 'vue'
import {shallowMount, createLocalVue} from '@vue/test-utils';
import MenuTab from '../../../../src/containers/RestaurantModal/MenuTab.vue';
import fakeStore from '../../../mock/store/index';

import locale from 'element-ui/lib/locale/lang/fr'

import Element from 'element-ui'

Vue.use(Element, {locale})

const localVue = createLocalVue();

localVue.use(Vuex);


describe('MenuTab', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = fakeStore.store;

    wrapper = shallowMount(MenuTab, {
      store: store,
      localVue
    });
  });

  test('Restaurant id selected should be 111', () => {
    expect(wrapper.vm._computedWatchers.restaurantId.value).toBe('111');
  });

  test('Categorie selected should be defined', () => {
    expect(wrapper.vm._computedWatchers.categorySelected.value).toBeDefined();
  });

  test('Menus selected should be defined', () => {
    expect(wrapper.vm._computedWatchers.menus.value).toBeDefined();
  });

  test('Categories should be defined', () => {
    expect(wrapper.vm._computedWatchers.categories.value).toBeDefined();
  });

  test('initMenuTab should be called', () => {
    expect(fakeStore.mock.menus.actions.initMenuTab).toHaveBeenCalled();

    expect(fakeStore.mock.menus.actions.initMenuTab).toHaveBeenCalled();
  });

  test('initMenuTab should be called when selected restaurant change', () => {
    fakeStore.mock.restaurants.state.selected._id = '123';

    expect(fakeStore.mock.menus.actions.initMenuTab).toHaveBeenCalled();
  });

  test('should handle count', () => {
    wrapper.vm.handleCount(1, 2);

    expect(fakeStore.mock.cart.actions.changeIntoCart).toHaveBeenCalled();
    expect(fakeStore.mock.menus.actions.setCountMenus).toHaveBeenCalled();
  });

});
