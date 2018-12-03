<template>
    <div id="changePage">
        <el-row>
            <el-col id="countRestaurant" :span="12">
                <label>Nombre de restaurants : {{countRestaurant}}</label>
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
export default {
    name: 'ChangePage',
    props: {
        pageSize: Number,
        page: Number,
        countRestaurant: Number,
        getRestaurantsFromServer: Function,
    },
    methods: {
        changePageSize(value) {
            this.$emit('pageSize', value);
            this.getRestaurantsFromServer(1, value);
        },
        changePage(page, firstPage, lastPage){
            const totalPages = Math.round(this.countRestaurant / this.pageSize);
            this.$emit('page', page < 1 ? 1 : page);

            if (page > totalPages) {
                this.$emit('page', totalPages);
                this.getRestaurantsFromServer(totalPages);
            }
            if (firstPage) {
                this.getRestaurantsFromServer(1);
            }
            if (lastPage) {
                this.getRestaurantsFromServer(totalPages);
            }
            this.getRestaurantsFromServer(page);
        },
        resfreshRestaurants() {
            try {
                this.$emit('seachRestaurant', '');
                this.getRestaurantsFromServer(1, 10);
                this.$emit('page', 1);
                this.$emit('pageSize', 10);

                this.$notify({
                    title: 'Refresh',
                    message: "Tableau rafraichi !",
                    type: 'warning'
                });
            } catch(err) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Echec du rafraichissement du tableau !",
                });
                console.error('[ERROR] resfreshRestaurants : ', err)
            }
        },
    },
}
</script>
