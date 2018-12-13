<template>
    <div id="changePage">
        <el-row>
            <el-col id="countRestaurant" :span="12">
                <label>Nombre de restaurants : {{count}}</label>
            </el-col>

            <el-col id="changePageSize" :span="12">
                <label for="changePagination">Nombre de restaurants par page : {{pageSize}}</label>
                <el-slider
                    type="range" 
                    id="changePagination" 
                    name="changePagination" 
                    :min="5" :max="100" :value="pageSize" :step="5"
                    v-on:input="changePageSize" />
            </el-col>
        </el-row>

        <el-row id="changePage" :span="12">
            <el-button  round 
                        native-type="button"
                        v-on:click="resfreshRestaurants">
                        Refresh
            </el-button>
            
            <el-button  icon="el-icon-d-arrow-left" 
                        v-on:click="firstPage()"
                        circle>
            </el-button>
            <el-button  icon="el-icon-arrow-left" 
                        v-on:click="decrementPage()"
                        circle>
            </el-button>
            <p>{{page}}</p>
            <el-button  icon="el-icon-arrow-right" 
                        v-on:click="incrementPage()"
                        circle>
            </el-button>
            <el-button  icon="el-icon-d-arrow-right" 
                        v-on:click="lastPage()"
                        circle>
            </el-button>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapActions, } from 'vuex'

export default {
    name: 'ChangePage',
    computed: {
        ...mapState({
            count: state => state.restaurants.count,
            pageSize: state => state.restaurants.table.pageSize,
            page: state => state.restaurants.table.page,
        }),
    },
    methods: {
        ...mapActions({
            incrementPage: 'restaurants/incrementPage',
            decrementPage: 'restaurants/decrementPage',
            firstPage: 'restaurants/firstPage',
            lastPage: 'restaurants/lastPage',
            changePageSize: 'restaurants/setPageSize',
        }),
        resfreshRestaurants(){
            console.log("resfreshRestaurants !!!")
        }
    },
}
</script>
