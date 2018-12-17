import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element'
import './plugins/googleMaps'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
