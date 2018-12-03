import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './plugins/element.js'
import Restaurants from './components/Restaurants'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:'/', component: Restaurants},
  {path:'/restaurants', component: Restaurants},
  {path:'/hello', component: HelloWorld},
]

const router = new VueRouter({
  routes: routes,
  mode:'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
