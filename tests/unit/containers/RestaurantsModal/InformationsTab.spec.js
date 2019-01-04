import Vuex from 'vuex';
import Vue from 'vue'

import Element from 'element-ui'
import InformationTab from '../../../../src/containers/RestaurantModal/InformationsTab.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import restaurants from '../../../mock/store/restaurants/index';
import locale from 'element-ui/lib/locale/lang/fr'

Vue.use(Element, { locale })

const localVue = createLocalVue();

localVue.use(Vuex);

describe('InformationTab', () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                restaurants: {
                    namespaced: true,
                    state: restaurants.state,
                    getters: restaurants.getters
              }
            }
          })

        wrapper = shallowMount(InformationTab, {
            store: store,
            localVue
        });
    });

    test('It should call restaurant selected getter.', () => {
        expect(restaurants.getters.restaurantSelected).toHaveBeenCalled();
      });

      test('Restaurant image should not be null', () => {
        expect(restaurants.state.imageCurrentRestaurant).toBeDefined();
      });
})