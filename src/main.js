import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VCalendar from 'v-calendar';
import VueDragDrop from 'vue-drag-drop';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

Vue.use(VueDragDrop);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');