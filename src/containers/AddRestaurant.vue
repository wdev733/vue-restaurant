<template>
    <el-row id="addRestaurant" :gutter="20">
        <div class="item-container">
            <!-- <i class="item el-icon-circle-plus"></i> -->
            <h3 class="item">Ajouter un restaurant</h3>
        </div>
        <form v-on:submit="addRestaurant">
            <el-row :gutter="20">
                <label>
                    <b>Nom : </b><el-input type="text" placeholder="Nom du restaurant" required name="nom" />
                </label>
            </el-row>
            <el-row :gutter="20">
                <label>
                    <b>Cuisine : </b><el-input type="text" placeholder="Type de cuisine" required name="cuisine" />
                </label>
            </el-row>
            <!-- <el-row :gutter="20">
                <el-row >
                    <label><b>Adresse : </b></label>
                </el-row>
                <el-row >
                    <el-col :span="8">
                        <label>
                            Bâtiment : <el-input type="text" placeholder="Exemple : Villa, 123" required name="building" />
                        </label>
                    </el-col>
                    <el-col :span="8">
                        <label>
                            Rue : <el-input type="text" placeholder="Exemple : 54, chemin Bleu" required name="street" />
                        </label>
                    </el-col>
                    <el-col :span="8">
                        <label>
                            Code postale : <el-input type="text" placeholder="Exemple : 06600" required name="zipcode" />
                        </label>
                    </el-col>
                </el-row>
            </el-row> -->
            <el-row :span="8">
                <el-button  icon="el-icon-circle-plus" 
                            round 
                            type="success"
                            native-type="submit">
                            Ajouter
                </el-button>
            </el-row>
        </form>
    </el-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions({
            create: 'restaurants/create',
        }),
        async addRestaurant(e) {
            e.preventDefault();
            try {
                const { succes } = await this.create(new FormData(e.target));
                succes && this.$notify({
                    title: 'Succés',
                    message: 'Restaurant ajouté !',
                    type: 'success'
                });
            } catch (error) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Echec de l'ajout du restaurant !",
                });
            }
        }
    }
}
</script>
