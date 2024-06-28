import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-full-calendar/dist/vue-full-calendar.css';
import './assets/tailwind.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');