import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './models/Auth';
import User from './models/User';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    User,
  },
});
