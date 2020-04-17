import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueRouter from 'vue-router'
import Vietnam from './components/Vietnam'
import Australia from './components/Australia'
import Laos from './components/Laos'
import Italy from './components/Italy'

Vue.config.productionTip = false
Vue.use(vueRouter)

const router = new vueRouter({
  mode:'history',
  routes:[
    {
      path:'/Vietnam',
      name:'Vietnam',
      component:Vietnam,
      meta:{ title:'Vietnam' }
    },
    {
      path:'/Laos',
      name:'Laos',
      component:Laos,
      meta:{ title:'Laos' }
    },
    {
      path:'/',
      name:'Australia',
      component:Australia,
      meta:{ title:'Australia' }
    },
    {
      path:'/Italy',
      name:'Italy',
      component:Italy,
      meta:{ title:'Italy' }
    }
  ]
})

router.beforeEach(( to,from,next ) => {
  document.title = to.meta.title + ' || Davide Cannerozzi'
  next()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
