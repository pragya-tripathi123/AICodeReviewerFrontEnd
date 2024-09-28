
import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home.vue';


Vue.use(Router);


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
];


export default new Router({
  mode: 'history', // Use 'history' mode to remove hash from URL
  routes,
});
