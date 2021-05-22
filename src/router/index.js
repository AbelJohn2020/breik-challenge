import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Calendar from '../views/Calendar.vue';
import Locations from '../views/Locations.vue';
import TurnTemplates from '../views/TurnTemplates.vue';
import User from '../views/Users.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/calendario',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations,
  },
  {
    path: '/turn-templates',
    name: 'Turn templates',
    component: TurnTemplates,
  },
  {
    path: '/users',
    name: 'Users',
    component: User,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
