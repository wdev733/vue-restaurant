<template>
    <GmapMap
        id="map"
        :center="{
            lat:coordinates[1], 
            lng:coordinates[0]
        }"
        :zoom="16"
        map-type-id="terrain"
        >
        <GmapMarker
            :position="{
                lat:coordinates[1], 
                lng:coordinates[0]
            }"
        />
    </GmapMap>
    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            coordinates: 'restaurants/coordRestaurantSelected',
        }),
    },
}
</script>

<style>
#map {
    width: 100%; 
    height: 400px
}
</style>
