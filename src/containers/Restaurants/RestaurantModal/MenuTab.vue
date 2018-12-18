<template>
    <div id="menuTab">
        <el-tabs tab-position="left" @tab-click="getMenus">
            <el-tab-pane 
                v-for="(categorie, index) in categories"
                :key="index" 
                :label="categorie.strCategory">
                <b>{{categorie.strCategory}}</b>
                <el-table
                    v-if="categorySelected"
                    v-loading="menus.length <= 0"
                    border
                    height="500"
                    :data="menus"
                    style="width: 100%">
                        <el-table-column
                            prop="strMeal"
                            label="Nom">
                        </el-table-column>
                        <el-table-column
                            prop="price"
                            label="Prix ($)">
                        </el-table-column>
                        <el-table-column
                            fixed="right"
                            label="Ajouter">
                            <template slot-scope="scope">
                                <el-button  @click="add(scope.row)"
                                            icon="el-icon-circle-plus">
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
    data(){
        return {
            price: 10,
        }
    },
    computed: {
        ...mapState({
            categories: state => state.menus.categories.all,
            menus: state => state.menus.all,
            categorySelected: state => state.menus.categories.selected,
        }),
    },
    mounted() {
        this.initMenuTab();
    },
    methods: {
        ...mapActions({
            initMenuTab: 'menus/initMenuTab',
            getMenubyCategorie: 'menus/getMenubyCategorie',
            add: 'cart/add',
        }),
        getMenus(e) {
            this.getMenubyCategorie(e.label);
        },
    }
}
</script>

<style>
#categoriesTabs {
    margin-bottom: 30px;
}
</style>
