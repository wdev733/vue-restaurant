import VueRouter from 'vue-router'

import Restaurants from './containers/Restaurants'
import HelloWorld from './containers/HelloWorld.vue'

const routes = [
    {path:'/', component: Restaurants},
    {path:'/restaurants', component: Restaurants},
    {path:'/hello', component: HelloWorld},
]
  
const router = new VueRouter({
    routes: routes,
    mode:'history'
})

export default router;