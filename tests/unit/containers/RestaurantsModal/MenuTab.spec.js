import Vuex from 'vuex';
import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import MenuTab from '../../../../src/containers/RestaurantModal/MenuTab.vue';
import fakeStore from '../../../mock/store/index';

import locale from 'element-ui/lib/locale/lang/fr'

import Element from 'element-ui'
Vue.use(Element, { locale })

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
    })
});
