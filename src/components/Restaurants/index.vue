<template>
	<div id="restaurants">
        <el-row>
            <FindRestaurant
                v-bind:url="url"
                v-bind:pageSize="pageSize"
                v-on:seachRestaurant="setSeachRestaurant"
                v-on:restaurants="setRestaurants"
                v-on:countRestaurant="setCountRestaurant"
                v-on:page="setPage"
            ></FindRestaurant>

            <el-row>
                <div class="item-container">
                    <i class="item el-icon-tickets"></i>
                    <h3 class="item">Liste des restaurants</h3>
                </div>
            </el-row>

            <ChangePage
                v-bind:pageSize="pageSize"
                v-on:page="setPage"
                v-on:countRestaurant="setCountRestaurant"
                v-bind:getRestaurantsFromServer="getRestaurantsFromServer"
                v-on:seachRestaurant="setSeachRestaurant"
                v-on:pageSize="setPageSize"
            ></ChangePage>

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
    data() {
        return {
            url: "http://localhost:8088/api",
            updateRestaurant: null,
            seachRestaurant: "",
            restaurants: [],
            page: 1,
            pageSize: 10,
            countRestaurant: 0,
            restaurantHasFound: false,
        }
    },
    components: {
        FindRestaurant,
        ChangePage,
    },
    mounted() {
        this.page = 1;
        this.getRestaurantsFromServer();
        this.getAllRestaurants();
    },
    methods: {
        setSeachRestaurant(value) {
            this.seachRestaurant = value;
        },
        setRestaurants(value) {
            this.restaurants = value;
        },
        setCountRestaurant(value){
            this.countRestaurant = value;
        },
        setPage(value) {
            this.page = value;
        },
        setPageSize(value) {
            this.pageSize = value;
        },
        getAllRestaurants() {
            this.$store.dispatch('restaurants/getAll')
        },
        async getRestaurantsFromServer(page = this.page, pageSize = this.pageSize) {
            this.page = page < 1 ? 1 : page;
            this.seachRestaurant = !!this.seachRestaurant ? `&name=${this.seachRestaurant}` : '';
            try {
                const response = await fetch(`${this.url}/restaurants?page=${this.page}&pagesize=${pageSize}${this.seachRestaurant}`);
                //const response = await fetch(`${this.url}/restaurants?page=${this.page}&pagesize=${pageSize}`);
                
                const { data, count } = await response.json();
                this.restaurants = data;
                this.countRestaurant = count;
            } catch(err) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Impossible de récupérer les restaurants",
                });
                console.error('[ERROR] getRestaurantsFromServer : ', err)
            }
        },
        async getRestaurantByIdFromServer(id) {
            console.log('getRestaurantByIdFromServer : ', id);
            try {
                const response = await fetch(`${this.url}/restaurants/${id}`);
                const { restaurant } = await response.json();
                this.restaurantHasFound = !!restaurant;
                this.updateRestaurant = !!restaurant ? restaurant : null;
            } catch(err) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Impossible de modifier ce restaurant",
                });
                console.error('[ERROR] restaurantSelected : ', err)
            }
        },
        async deleteRestaurant(id) {
            try {
                const response = await fetch(`${this.url}/restaurants/${id}`, {
                    method: "DELETE"
                });
                this.getRestaurantsFromServer(this.page);

                this.$notify({
                    title: 'Succés',
                    message: 'Restaurant supprimé !',
                    type: 'success'
                });
            } catch(err) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Echec de la suppréssion du restaurant !",
                });
                console.error('[ERROR] deleteRestaurant : ', err)
            }
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