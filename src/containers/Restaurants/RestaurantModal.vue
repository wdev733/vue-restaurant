<template>
    <el-dialog
        title="Mettre-à-jour un restaurant"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
            <el-row id="updateRestaurant">
                <form v-on:submit="updateRestaurant">
                    <el-col :span="8">
                        <label>
                            Nom : 
                            <el-input 
                                type="text" 
                                name="nom" 
                                required
                                v-model="restaurant.name" />
                        </label>
                    </el-col>
                    <el-col :span="8">
                        <label>
                            Cuisine :
                            <el-input 
                                type="text" 
                                name="cuisine" 
                                required
                                v-model="restaurant.cuisine" />
                        </label>
                    </el-col>
                    <el-col :span="4">
                        <el-button  icon="el-icon-edit" 
                                    round 
                                    type="primary"
                                    native-type="submit">
                                    Modifier
                        </el-button>
                    </el-col>
                </form>
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
            openModal: state => state.restaurants.openModal,
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
            toggleOpenModal: 'restaurants/toggleOpenModal',
        }),
        updateRestaurant() {
            return
        },
    }
}
</script>