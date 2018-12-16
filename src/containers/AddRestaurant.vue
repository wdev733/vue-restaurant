<template>
    <el-row id="addRestaurant" :gutter="20">
        <div class="item-container">
            <!-- <i class="item el-icon-circle-plus"></i> -->
            <h3 class="item">Ajouter un restaurant</h3>
        </div>
        <form v-on:submit="addRestaurant">
            <el-col :span="8">
                <label>
                    Nom : <el-input type="text" required name="nom" />
                </label>
            </el-col>
            <el-col :span="8">
                <label>
                    Cuisine : <el-input type="text" required name="cuisine" />
                </label>
            </el-col>
            <el-col :span="8">
                <el-button  icon="el-icon-circle-plus" 
                            round 
                            type="success"
                            native-type="submit">
                            Ajouter
                </el-button>
            </el-col>
        </form>
    </el-row>
</template>

<script>
export default {
    methods: {
        addRestaurant() {
            return
        }
    }
}
</script>
