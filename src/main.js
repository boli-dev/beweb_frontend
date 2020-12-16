import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import VueForm from 'vue-form';
import VueMoment from 'vue-moment';
import momentTimezone from 'moment-timezone';

Vue.use(VueForm);
Vue.use(SuiVue);
Vue.use(VueMoment, {
  momentTimezone,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
