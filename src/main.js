import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';

Vue.use(VueRouter);

const routes = [
  {path: '/goods', component: goods}
  // {path: '/ratings', component: goods},
  // {path: '/goods', component: goods}
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
const app = new Vue({
  router
}).$mount('#app');
