<template>
  <el-row id="order" :gutter="20">
    <div class="item-container">
      <!-- <i class="item el-icon-circle-plus"></i> -->
      <h3 class="item">Commande</h3>

      <el-row>
<<<<<<< HEAD
        <el-table border :data="cart" style="width: 100%">
          <el-table-column prop="name" label="Restaurant(s)" width="300">
            <template slot-scope="scope">
              <el-button @click="onDetailsRestaurantSelected(scope.row._id)" icon="el-icon-info"></el-button>
              {{scope.row.name}}
            </template>
          </el-table-column>
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
=======
        <template>
          <el-table border height="500" :data="cart" style="width: 100%">
            <el-table-column prop="strMeal" label="Produit"></el-table-column>
            <el-table-column prop="price" label="Prix ($)"></el-table-column>
            <el-table-column fixed="right">
              <template slot-scope="scope">
                <el-input-number
                  size="mini"
                  :min="0"
                  @change="num => handleCount(num, scope.row)"
                  :value="scope.row.count"
                ></el-input-number>
              </template>
            </el-table-column>
          </el-table>
        </template>
>>>>>>> remove + when compare id
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
<<<<<<< HEAD
      cart: state => state.cart.all,
      restaurant: state => state.restaurants.selected
=======
      cart: state => state.cart.all
>>>>>>> remove + when compare id
    })
  },
  methods: {
    ...mapActions({
<<<<<<< HEAD
      setCount: "cart/setCount",
      getRestaurantById: "restaurants/getById",
      toggleOpenDetailsModal: "restaurants/toggleOpenDetailsModal",
      getImageCurrentRestaurant: "restaurants/getImageCurrentRestaurant"
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
    },
    async onDetailsRestaurantSelected(id) {
      await this.getRestaurantById(id);
      if (this.restaurant) {
        this.toggleOpenDetailsModal();
        this.getImageCurrentRestaurant(this.restaurant.name);
      }
=======
      setCount: "cart/setCount"
    }),
    handleCount(num, menu) {
      this.setCount({ num, menu });
>>>>>>> remove + when compare id
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
