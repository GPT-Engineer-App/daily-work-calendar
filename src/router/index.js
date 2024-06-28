import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Calendar from '../views/Calendar.vue';
import Tasks from '../views/Tasks.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;