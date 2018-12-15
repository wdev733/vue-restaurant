<template>
    <el-menu 
        router="true"
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal"
        @select="handleSelect">
        <el-menu-item index="/">Accueil</el-menu-item>
        <el-menu-item index="/restaurants">Restaurants</el-menu-item>
        <el-menu-item index="4">Ajouter un restaurant</el-menu-item>
        <el-menu-item index="5">Commande</el-menu-item>
        <el-menu-item index="/hello">Hello World !</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    methods: {
        handleSelect() {
            return
        }
    }
}
</script>