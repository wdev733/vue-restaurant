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
                        v-on:click="changePage(page, true)"
                        circle>
            </el-button>
            <el-button  icon="el-icon-arrow-left" 
                        v-on:click="changePage(--page)"
                        circle>
            </el-button>
            <p>{{page}}</p>
            <el-button  icon="el-icon-arrow-right" 
                        v-on:click="changePage(++page)"
                        circle>
            </el-button>
            <el-button  icon="el-icon-d-arrow-right" 
                        v-on:click="changePage(page, false, true)"
                        circle>
            </el-button>
        </el-row>
    </div>
</template>

<script>
import { mapState, mapGetters, } from 'vuex'

export default {
    name: 'ChangePage',
    computed: {
        ...mapState({
            count: state => state.restaurants.count,
            page: state => state.restaurants.table.page,
            pageSize: state => state.restaurants.table.pageSize,
        }),
    },
    props: {
        getAllRestaurants: Function,
    },
    methods: {
        changePageSize(payload) {
            this.$store.dispatch('restaurants/setPageSize', payload)
            this.getAllRestaurants(1, this.pageSize);
        },
        changePage(page, firstPage, lastPage){
            const totalPages = Math.round(this.count / this.pageSize);
            this.$store.dispatch('restaurants/setPage', page < 1 ? 1 : page)

            if (page > totalPages) {
                this.$store.dispatch('restaurants/setPage', totalPages)
                this.getAllRestaurants(this.page);
            }
            if (firstPage) {
                this.getAllRestaurants(1);
            }
            if (lastPage) {
                this.getAllRestaurants(totalPages);
            }
            this.getAllRestaurants(this.page);
        },
        resfreshRestaurants(){
            console.log("resfreshRestaurants !!!")
        }
    },
}
</script>
