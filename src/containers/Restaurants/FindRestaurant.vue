<template>
    <el-row id="findRestaurants" :gutter="20">
        <div class="item-container">
            <!-- <i class="item el-icon-question"></i> -->
            <h3 class="item">Rechercher un restaurant</h3>
        </div>
        <el-input type="text" 
                v-on:input="findRestaurants"
                placeholder="Chercher un restaurant..."/>
        
    </el-row>
</template>

<script>
import { mapState, mapActions, } from 'vuex'

export default {
    name: 'FindRestaurant',
    computed: {
        ...mapState({
            count: state => state.restaurants.count,
            restaurants: state => state.restaurants.all,
            page: state => state.restaurants.table.page,
            pageSize: state => state.restaurants.table.pageSize,
        }),
    }, 
    methods: {
        ...mapActions({
            setPage: 'restaurants/setPage',
            getAll: 'restaurants/getAll',
            setRestaurantName: 'restaurants/setRestaurantName',
        }),
        findRestaurants(restaurantName) {
            const { pageSize } = this;
            this.setPage(1);
            this.setRestaurantName(restaurantName);
            this.getAll({pageSize, restaurantName});
        },
    },
}
</script>
