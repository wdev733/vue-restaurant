<template>
    <el-dialog
        :title="restaurant.name"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
            <el-row id="detailsRestaurant">
                <img id="imageRestaurant" :src="image"/>
                <ul>
                    <li><b>Cuisine : </b>{{restaurant.cuisine}}</li>
                    <li v-if="restaurant.address.street">
                        <b>Adresse : </b>
                        <ul>
                            <li><b>Batiment : </b>{{restaurant.address.building}}</li>
                            <li><b>Rue : </b>{{restaurant.address.street}}</li>
                            <li><b>Code postale : </b>{{restaurant.address.zipcode}}</li>
                            <li><b>Quartier : </b>{{restaurant.borough}}</li>
                        </ul>
                    </li>
                </ul>
            </el-row>
            <MapTool v-if="restaurant.address.street">></MapTool>
    </el-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import MapTool from '../../components/MapTool.vue';

export default {
    name: 'RestaurantModal',
    computed: {
        ...mapState({
            openModal: state => state.restaurants.modals.openDetailsModal,
            image: state => state.restaurants.imageCurrentRestaurant,
        }),
        ...mapGetters({
            restaurant: 'restaurants/restaurantSelected',
        }),
    },
    components: { 
        MapTool
    },
    methods: {
        ...mapActions({
            toggleOpenModal: 'restaurants/toggleOpenDetailsModal',
        }),
    }
}
</script>

<style>
#imageRestaurant {
    max-width: 400px;
    max-height: 400px;
}
</style>
