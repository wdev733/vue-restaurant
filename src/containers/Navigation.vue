<template>
    <el-menu 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        class="el-menu-demo" 
        mode="horizontal">
        <el-menu-item index="/">Accueil</el-menu-item>
        <el-menu-item index="/restaurants">Restaurants</el-menu-item>
        <el-menu-item index="/add">Ajouter un restaurant</el-menu-item>
        <el-menu-item index="/order">Commande</el-menu-item>
    </el-menu>
</template>

<script>
export default {}
</script>