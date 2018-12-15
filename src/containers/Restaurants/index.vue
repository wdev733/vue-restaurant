<template>
	<div id="restaurants">
        <el-row>
            <FindRestaurant></FindRestaurant>

            <el-row>
                <div class="item-container">
                    <i class="item el-icon-tickets"></i>
                    <h3 class="item">Liste des restaurants</h3>
                </div>
            </el-row>

            <ChangePage></ChangePage>

            <el-row>
                <template>
                    <el-table
                        border
                        height="500"
                        :data="restaurants"
                        style="width: 100%">
                            <el-table-column
                                prop="name"
                                label="Nom">
                            </el-table-column>
                            <el-table-column
                                prop="cuisine"
                                label="Cuisine">
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="Détails">
                                <template slot-scope="scope">
                                    <el-button  @click="onDetailsRestaurantSelected(scope.row._id)"
                                                icon="el-icon-info">
                                    </el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="Modifier">
                                <template slot-scope="scope">
                                    <el-button  @click="onUpdatedRestaurantSelected(scope.row._id)"
                                                icon="el-icon-circle-check">
                                    </el-button>
                                </template>
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                label="Supprimer">
                                <template slot-scope="scope">
                                    <el-button  @click="deleteRestaurant(scope.row._id)"
                                                icon="el-icon-circle-close">
                                    </el-button>
                                </template>
                            </el-table-column>
                    </el-table>
                </template>
            </el-row>
            <UpdateRestaurantModal></UpdateRestaurantModal>
            <RestaurantModal></RestaurantModal>
        </el-row>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FindRestaurant from './FindRestaurant';
import ChangePage from './ChangePage';
import UpdateRestaurantModal from './UpdateRestaurantModal';
import RestaurantModal from './RestaurantModal';

export default {
    name: 'Restaurants',
    computed: {
        ...mapState({
            count: state => state.restaurants.count,
            restaurants: state => state.restaurants.all,
            restaurant: state => state.restaurants.selected,
            page: state => state.restaurants.table.page,
            pageSize: state => state.restaurants.table.pageSize,
        }),
    },
    components: {
        FindRestaurant,
        ChangePage,
        UpdateRestaurantModal,
        RestaurantModal,
    },
    mounted() {
        const { page, pageSize } = this;
        this.getAllRestaurants({page, pageSize});
    },
    methods: {
        ...mapActions({
            getAllRestaurants: 'restaurants/getAll',
            getRestaurantById: 'restaurants/getById',
            toggleOpenDetailsModal: 'restaurants/toggleOpenDetailsModal',
            toggleOpenUpdateModal: 'restaurants/toggleOpenUpdateModal',
        }),
        async onUpdatedRestaurantSelected (id) {
            await this.getRestaurantById(id);
            !!this.restaurant && this.toggleOpenUpdateModal();
        },
        async onDetailsRestaurantSelected (id) {
            await this.getRestaurantById(id);
            !!this.restaurant && this.toggleOpenDetailsModal();
        },
    }
}
</script>

<style scoped>
p {
    font-style: italic;
    color:red; 
}
</style>