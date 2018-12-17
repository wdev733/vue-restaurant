import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, { 
    load: {
        key: 'AIzaSyDJUdCMASR5rRcDP25yNcn5DCm3uKffcy0',
        libraries: 'places', 
    }
 })
