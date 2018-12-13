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
                                label="Modifier">
                                <template slot-scope="scope">
                                    <el-button  @click="getRestaurantByIdFromServer(scope.row._id)"
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
        </el-row>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FindRestaurant from './FindRestaurant.vue';
import ChangePage from './ChangePage.vue';

export default {
    name: 'Restaurants',
    computed: {
        ...mapState({
            count: state => state.restaurants.count,
            restaurants: state => state.restaurants.all,
            page: state => state.restaurants.table.page,
            pageSize: state => state.restaurants.table.pageSize,
        }),
    },
    components: {
        FindRestaurant,
        ChangePage,
    },
    mounted() {
        const { page, pageSize } = this;
        this.getAllRestaurants({page, pageSize});
    },
    methods: {
        ...mapActions({
            getAllRestaurants: 'restaurants/getAll',
        }),
    }
}
</script>

<style scoped>
p {
    font-style: italic;
    color:red; 
}
</style>