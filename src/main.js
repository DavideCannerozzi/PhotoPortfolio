import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router'
import About from './components/About'
import Australia from './components/Australia'
import Laos from './components/Laos'
import Italy from './components/Italy'

Vue.config.productionTip = false
Vue.use(vueRouter)


const router = new vueRouter({
  mode:'history',
  routes:[
    {
      path:'/About',
      name:'About',
      component:About
    },
    {
      path:'/Laos',
      name:'Laos',
      component:Laos
    },
    {
      path:'/Australia',
      name:'Australia',
      component:Australia
    },
    {
      path:'/Italy',
      name:'Italy',
      component:Italy
    }
  ]
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
