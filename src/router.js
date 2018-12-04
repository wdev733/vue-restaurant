import VueRouter from 'vue-router'

import Restaurants from './components/Restaurants'
import HelloWorld from './components/HelloWorld.vue'

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