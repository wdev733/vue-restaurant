<template>
    <el-dialog
        :title="restaurant.name"
        :visible.sync="openModal"
        :before-close="toggleOpenModal"
        width="90%">
        <el-tabs type="card">
            <el-tab-pane label="Informations">
                <InformationsTab></InformationsTab>
            </el-tab-pane>
            <el-tab-pane label="Menu">
                <MenuTab></MenuTab>
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
import { mapState, mapActions, mapGetters, } from 'vuex'

import InformationsTab from './InformationsTab'
import MenuTab from './MenuTab'

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
        InformationsTab,
        MenuTab,
    },
    methods: {
        ...mapActions({
            toggleOpenModal: 'restaurants/toggleOpenDetailsModal',
        }),
    }
}
</script>
