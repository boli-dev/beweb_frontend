import Http from '../http';
import router from '../../router';

const state = {
  user: {},
  isLoggedIn: false,
  error: '',
};

const getters = {
  GET_IS_LOGGED_IN: (state) => {
    return state.isLoggedIn;
  },

  GET_USER: (state) => {
    return state.user;
  },

  GET_ERROR: (state) => {
    return state.error;
  },
};

const mutations = {
  SET_IS_LOGGED_IN: (state, isLoggedIn) => {
    state.isLoggedIn = isLoggedIn;
  },

  SET_USER: (state, user) => {
    state.user = user;
  },

  SET_ERROR: (state, error) => {
    state.error = error;
  },
};

const actions = {
  async login({ commit }, payload) {
    const { username, password } = payload;
    const { data } = await Http.post(
      '?r=login',
      {
        username,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      }
    );

    if (data) {
      const { message } = data;
      if (message) {
        commit('SET_ERROR', message);
      } else {
        commit('SET_IS_LOGGED_IN', true);
        commit('SET_USER', data);
        commit('SET_ERROR', '');
        router.push({
          name: 'Dashboard',
        });
      }
    }
  },

  logout({ commit }) {
    commit('SET_USER', {});
    commit('SET_IS_LOGGED_IN', false);
    router.push('/login');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
