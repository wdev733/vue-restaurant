<template>
  <el-row id="order" :gutter="20">
    <div class="item-container">
      <!-- <i class="item el-icon-circle-plus"></i> -->
      <h3 class="item">Commande</h3>

      <el-row>
        <el-table border :data="cart" style="width: 100%">
          <el-table-column prop="name" label="Restaurant(s)" width="300"></el-table-column>
          <el-table-column prop="products" label="Plat(s)">
            <template slot-scope="scope">
              <el-table :data="scope.row.products">
                <el-table-column label="Nom" prop="strMeal"></el-table-column>
                <el-table-column label="Quantité" prop="count"></el-table-column>
                <el-table-column label="Prix unitaire ($)" prop="price"></el-table-column>
                <el-table-column label="Prix total ($)">
                  <template slot-scope="scope">{{priceMultiple(scope.row)}}</template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
        </el-table>
        <el-tag size="medium" type="danger" id="totalOrder">
          TOTAL:
          <b>{{total()}}</b>
        </el-tag>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      cart: state => state.cart.all
    })
  },
  mounted() {
    console.log("cart: ", this.cart);
  },
  methods: {
    ...mapActions({
      setCount: "cart/setCount"
    }),
    handleCount(num, menu) {
      this.setCount({ num, menu });
    },
    priceMultiple(product) {
      const { count, price } = product;
      return count * price;
    },
    total() {
      let result = 0;
      this.cart.forEach(restaurant => {
        restaurant.products.forEach(product => {
          result += this.priceMultiple(product);
        });
      });
      return `${result} $`;
    }
  }
};
</script>

<style>
#totalOrder {
  float: right;
  width: 21%;
}
</style>
