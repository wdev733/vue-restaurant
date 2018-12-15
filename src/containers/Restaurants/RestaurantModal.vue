<template>
    <el-dialog
        :title="restaurant.name"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
            <el-row id="detailsRestaurant">
                <ul>
                    <li><b>Cuisine : </b>{{restaurant.cuisine}}</li>
                    <li>
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
            <MapTool></MapTool>
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
        }),
        ...mapGetters({
            restaurant: 'restaurants/restaurantSelected',
        }),
    },
    mounted() {
        //this.getImageCurrentRestaurant(this.restaurant.name);
        this.getImageCurrentRestaurant('Dj Reynolds Pub And Restaurant');
    },
    components: { 
        MapTool
    },
    methods: {
        ...mapActions({
            toggleOpenModal: 'restaurants/toggleOpenDetailsModal',
            getImageCurrentRestaurant: 'restaurants/getImageCurrentRestaurant',
        }),
    }
}
</script>