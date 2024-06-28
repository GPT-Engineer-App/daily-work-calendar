import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Calendar from '@/views/Calendar.vue';
import Tasks from '@/views/Tasks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    }
  ]
});