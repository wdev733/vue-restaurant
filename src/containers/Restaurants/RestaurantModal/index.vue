<template>
    <el-dialog
        :title="restaurant.name"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
        <InformationsTab></InformationsTab>
    </el-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters, } from 'vuex'

import InformationsTab from './InformationsTab'

export default {
    computed: {
        ...mapState({
            openModal: state => state.restaurants.modals.openDetailsModal,
        }),
        ...mapGetters({
            restaurant: 'restaurants/restaurantSelected',
        }),
    },
    components: {
        InformationsTab
    },
    methods: {
        ...mapActions({
            toggleOpenModal: 'restaurants/toggleOpenDetailsModal',
        }),
    }
}
</script>
