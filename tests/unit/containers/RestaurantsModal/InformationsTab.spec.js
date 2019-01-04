import Vuex from 'vuex';
import Vue from 'vue'

import Element from 'element-ui'
import InformationTab from '../../../../src/containers/RestaurantModal/InformationsTab.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import locale from 'element-ui/lib/locale/lang/fr'
import fakeStore from '../../../mock/store/index';

Vue.use(Element, { locale })

const localVue = createLocalVue();

localVue.use(Vuex);

describe('InformationTab', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = fakeStore.store;

        wrapper = shallowMount(InformationTab, {
            store: store,
            localVue
        });
    });

    test('It should call restaurant selected getter.', () => {
        expect(fakeStore.mock.restaurants.getters.restaurantSelected).toHaveBeenCalled();
      });

      test('Restaurant image should not be null', () => {
        expect(wrapper.vm._computedWatchers.image.value).toBe('test');
      });
})
