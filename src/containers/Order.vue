<template>
    <el-row id="order" :gutter="20">
        <div class="item-container">
            <!-- <i class="item el-icon-circle-plus"></i> -->
            <h3 class="item">Commande</h3>

            <el-row>
                <template>
                    <el-table
                        border
                        height="500"
                        :data="cart"
                        style="width: 100%">
                            <el-table-column
                                prop="strMeal"
                                label="Produit">
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
                </template>
            </el-row>
        </div>
    </el-row>
</template>

<script>
import { mapActions, mapState, } from 'vuex'

export default {
    computed: {
        ...mapState({
            cart: state => state.cart.all,
        }),
    },
    methods: {
        ...mapActions({
            setCount: 'cart/setCount',
        }),
        handleCount(num, menu) {
            this.setCount({num, menu});
        }
    }
}
</script>
