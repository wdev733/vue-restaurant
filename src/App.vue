<template>
  <div id="app">
    <el-main>
      <div>
        <router-link to="/">Accueil</router-link>
        <router-link to="/restaurants">Restaurants</router-link>
        <router-link to="/hello">Hello World !</router-link>
      </div>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
import Restaurants from './components/Restaurants'

export default {
  name: 'app',
  components: {
    Restaurants
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
