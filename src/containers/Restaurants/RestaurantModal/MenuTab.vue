<template>
    <div id="menuTab">
        MENU
    </div>
</template>

<script>
import { mapActions, } from 'vuex'

export default {
    mounted() {
        this.getCategories();
    },
    methods: {
        ...mapActions({
            getCategories: 'menus/getCategories',
        }),
    }
}
</script>
