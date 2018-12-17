<template>
    <div id="menuTab">
        <el-tabs tab-position="left" @tab-click="getMenus">
            <el-tab-pane 
                v-for="(categorie, index) in categories"
                :key="index" 
                :label="categorie.strCategory">
                {{categorie.strCategory}}
                <el-table
                    v-if="menus"
                    border
                    height="500"
                    :data="menus"
                    style="width: 100%">
                        <el-table-column
                            prop="strMeal"
                            label="Nom">
                        </el-table-column>
                        <el-table-column
                            label="Prix">
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="Choisir">
                            <template slot-scope="scope">
                                <el-button  @click="onSelected(scope.row.strMeal)"
                                            icon="el-icon-circle-check">
                                </el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapActions, mapState, } from 'vuex'

export default {
    computed: {
        ...mapState({
            categories: state => state.menus.categories.all,
            menus: state => state.menus.all,
        }),
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        ...mapActions({
            getCategories: 'menus/getCategories',
            getMenubyCategorie: 'menus/getMenubyCategorie',
        }),
        getMenus(e) {
            this.getMenubyCategorie(e.label);
        },
        onSelected(e) {
            console.log('onSelected : ', e);
        }
    }
}
</script>

<style>
#categoriesTabs {
    margin-bottom: 30px;
}
</style>
