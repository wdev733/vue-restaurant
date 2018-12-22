<template>
  <div id="app">
    <el-main>
      <Navigation></Navigation>
      <router-view></router-view>
    </el-main>
    <RestaurantModal></RestaurantModal>
  </div>
</template>

<script>
import Navigation from "./containers/Navigation";
import RestaurantModal from "./containers/RestaurantModal";

export default {
  name: "app",
  components: {
    Navigation,
    RestaurantModal
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
