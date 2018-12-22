<template>
  <div id="informationsTab">
    <el-row>
      <img id="imageRestaurant" :src="image">
      <ul>
        <li>
          <b>Cuisine :</b>
          {{restaurant.cuisine}}
        </li>
        <li v-if="restaurant.address.street">
          <b>Adresse :</b>
          <ul>
            <li>
              <b>Batiment :</b>
              {{restaurant.address.building}}
            </li>
            <li>
              <b>Rue :</b>
              {{restaurant.address.street}}
            </li>
            <li>
              <b>Code postale :</b>
              {{restaurant.address.zipcode}}
            </li>
            <li>
              <b>Quartier :</b>
              {{restaurant.borough}}
            </li>
          </ul>
        </li>
      </ul>
    </el-row>
    <MapTool v-if="restaurant.address.street"></MapTool>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import MapTool from "../../components/MapTool.vue";

export default {
  name: "RestaurantModal",
  computed: {
    ...mapState({
      image: state => state.restaurants.imageCurrentRestaurant
    }),
    ...mapGetters({
      restaurant: "restaurants/restaurantSelected"
    })
  },
  components: {
    MapTool
  }
};
</script>

<style>
#imageRestaurant {
  max-width: 400px;
  max-height: 400px;
}
</style>
