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
                            fixed="right">
                            <template slot-scope="scope">
                                <el-input-number 
                                    size="mini"
                                    :min="0"
                                    @change="num => handleCount(num, scope.row)"
                                    :value="scope.row.count">
                                </el-input-number>
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
            cart: state => state.cart.all,
            categories: state => state.menus.categories.all,
            menus: state => state.menus.all,
            categorySelected: state => state.menus.categories.selected,
            restaurant_id: state => state.restaurants.selected.restaurant_id,
        }),
    },
    mounted() {
        this.initMenuTab();
    },
    watch: {
        restaurant_id: function (value, oldValue) {
            value !== oldValue && this.initMenuTab();
        }
    },
    methods: {
        ...mapActions({
            initMenuTab: 'menus/initMenuTab',
            //setCountProductsFromMenus: 'menus/setCountProductsFromMenus',
            getMenubyCategorie: 'menus/getMenubyCategorie',
            addIntoCart: 'cart/addIntoCart',
        }),
        getMenus(e) {
            this.getMenubyCategorie(e.label);
        },
        handleCount(num, menu) {
            this.addIntoCart({num, menu});
        },
    },
}
</script>

<style>
#categoriesTabs {
    margin-bottom: 30px;
}
</style>
