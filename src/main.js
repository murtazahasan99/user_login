import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import login from './components/login'
import register from './components/register'
import home from './components/home'
import store from './store/store'
import fatima from './components/fatima'
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.use(VueRouter)
const router=new VueRouter({
  mode:"history",
  routes: [{path:"/",component: home},
          {path:"/register",component: register},
          {path:"/login",component: login},
          {path:"/fatima",component: fatima}]     
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
