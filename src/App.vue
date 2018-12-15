<template>
    <div id="app">
        <el-main>
            <Navigation></Navigation>
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
import Navigation from './containers/Navigation'

export default {
    name: 'app',
    components: {
        Navigation,
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
