import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Relation from '../components/Relation.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/relation',
      name: 'Relation',
      component: Relation,
      props: true,
    },
  ],
});
