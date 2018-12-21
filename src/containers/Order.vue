<template>
    <el-row id="order" :gutter="20">
        <div class="item-container">
            <!-- <i class="item el-icon-circle-plus"></i> -->
            <h3 class="item">Commande</h3>

            <el-row>
                <!-- <template v-for="(restaurant, index) in cart">
                </template> -->

                <el-table
                    border
                    height="500"
                    :data="cart"
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="Restaurant(s)">
                    </el-table-column>
                    <el-table-column
                        prop="products"
                        label="Plat(s)">
                        <template slot-scope="scope">
                            <el-table :data="scope.row.products">
                                <el-table-column 
                                    label="Nom"
                                    prop="strMeal">
                                </el-table-column>
                                <el-table-column 
                                    label="Quantité"
                                    prop="count">
                                </el-table-column>
                                <el-table-column 
                                    label="Prix ($)"
                                    prop="price">
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>
                </el-table>
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
    mounted() {
        console.log('cart: ', this.cart)
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
