<template>
    <mgl-map
        id="map"
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
        :center="coordinates"
        :zoom="zoom">
        <mgl-marker :coordinates="coordinates" color="blue"></mgl-marker>
    </mgl-map>
</template>

<script>
import { MglMap, MglMarker } from 'vue-mapbox'

export default {
    components: {
        MglMap,
        MglMarker
    },
    data: () => ({
        accessToken: 'pk.eyJ1IjoicmxlbWJvIiwiYSI6ImNqcG9kYmpkdjA3OXAzeHJ0YXpyY3F3amEifQ.bRtN1Fg_KAVXnhRspshrpA',
        mapStyle: 'mapbox://styles/mapbox/streets-v10',
        coordinates: [-73.7032601, 40.7386417],
        zoom: 13
    })
}
</script>

<style>
#map {
    height: 400px;
    width: 100%;
    top:0; 
    bottom:0;
}

.mapboxgl-canvas {
    position: initial !important; 
}
</style>
