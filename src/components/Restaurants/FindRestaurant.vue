<template>
    <div id="findRestaurant">
        <el-row id="findRestaurant" :gutter="20">
            <div class="item-container">
                <i class="item el-icon-question"></i>
                <h3 class="item">Rechercher un restaurant</h3>
            </div>
            <el-input type="text" 
                    v-on:input="findRestaurant"
                    placeholder="Chercher un restaurant..."/>
            
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'FindRestaurant',
    props: {
        url: String,
        seachRestaurant: String,
        pageSize: Number,
        restaurants: Array,
        countRestaurant: Number,
        page: Number,
    },
    methods: {
        async findRestaurant(name) {
            this.$emit('seachRestaurant', name);
            name = !!name ? `name=${name}` : '';
            try {
                const response = await fetch(`${this.url}/restaurants?${name}&pagesize=${this.pageSize}`);
                const { data, count } = await response.json();

                this.$emit('restaurants', data);
                this.$emit('countRestaurant', count);
                this.$emit('page', 1);
            } catch(err) {
                this.$notify.error({
                    title: 'Erreur',
                    message: "Impossible de trouver le(s) restaurant(s)",
                });
                console.error('[ERROR] findRestaurant : ', err)
            }
        },
    },
}
</script>
