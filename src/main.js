import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }

const router = new VueRouter({
  mode: 'history', //HashBang 모드에서 history로 변경(URL에 #이 포함되므로)
  routes: [
    {path: '/', component: App},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})
