<template>
    <el-dialog
        title="Mettre-à-jour un restaurant"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
            <el-row id="updateRestaurant">
                <form v-on:submit="updateRestaurant">
                    <el-col :span="8">
                        <label>
                            Nom : 
                            <el-input 
                                type="text" 
                                name="nom" 
                                required
                                :value="restaurant.name" />
                        </label>
                    </el-col>
                    <el-col :span="8">
                        <label>
                            Cuisine :
                            <el-input 
                                type="text" 
                                name="cuisine" 
                                required
                                :value="restaurant.cuisine" />
                        </label>
                    </el-col>
                    <el-col :span="4">
                        <el-button  icon="el-icon-edit" 
                                    round 
                                    type="primary"
                                    native-type="submit">
                                    Modifier
                        </el-button>
                    </el-col>
                </form>
            </el-row>
    </el-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    name: 'UpdateRestaurantModal',
    computed: {
        ...mapState({
            openModal: state => state.restaurants.modals.openUpdateModal,
        }),
        ...mapGetters({
            restaurant: 'restaurants/restaurantSelected',
        }),
    },
    methods: {
        ...mapActions({
            toggleOpenModal: 'restaurants/toggleOpenUpdateModal',
            update: 'restaurants/update',
        }),
        async updateRestaurant(e) {
            e.preventDefault();
            const { _id: id } = this.restaurant;
            try {
                const { succes } = await this.update({id, formData: new FormData(e.target)});
                succes && this.$notify({
                    title: 'Succés',
                    message: 'Restaurant modifié !',
                    type: 'success'
                });
            } catch (error) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Echec de la modification du restaurant !",
                });
            }
        },
    }
}
</script>