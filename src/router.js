import VueRouter from 'vue-router'

import Restaurants from './containers/Restaurants'
import AddRestaurant from './containers/AddRestaurant'

const routes = [
    {path:'/', component: Restaurants},
    {path:'/restaurants', component: Restaurants},
    {path:'/add', component: AddRestaurant},
]
  
const router = new VueRouter({
    routes: routes,
    mode:'history'
})

export default router;