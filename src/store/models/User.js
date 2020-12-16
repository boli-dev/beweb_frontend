import Http from '../http';
import router from '../../router';

const state = {
  users: [],
  user: {},
  loading: false,
  error: '',
};

const getters = {
  GET_LOADING: (state) => {
    return state.loading;
  },

  GET_USERS: (state) => {
    return state.users;
  },

  GET_USER: (state) => {
    return state.user;
  },

  GET_ERROR: (state) => {
    return state.error;
  },
};

const mutations = {
  SET_LOADING: (state, loading) => {
    state.loading = loading;
  },

  SET_USERS: (state, users) => {
    state.users = users;
  },

  SET_USER: (state, user) => {
    state.user = user;
  },

  SET_ERROR: (state, error) => {
    state.error = error;
  },
};

const actions = {
  loadUsers({ commit }) {
    console.log('ff');
    commit('SET_LOADING', true);
    setTimeout(() => {
      Http.get('?r=fetch_users')
        .then(({ data: { users } }) => {
          commit('SET_USERS', users);
          commit('SET_LOADING', false);
        })
        .catch((e) => {
          commit('SET_LOADING', false);
          commit('SET_ERROR', e.message);
        });
    }, 3000);
  },

  getUser({ commit }, id) {
    commit('SET_LOADING', true);
    setTimeout(() => {
      Http.get('?r=fetch_one_user&&id=' + id)
        .then(({ data }) => {
          commit('SET_USER', data);
          commit('SET_LOADING', false);
        })
        .catch((e) => {
          commit('SET_LOADING', false);
          commit('SET_ERROR', e.message);
        });
    }, 3000);
  },

  addUser({ commit }, payload) {
    const { name, username, email, password } = payload;
    commit('SET_LOADING', true);
    setTimeout(() => {
      Http.post(
        `?r=create_one_user`,
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      )
        .then(() => {
          commit('SET_LOADING', false);
          router.push({
            name: 'Dashboard',
          });
        })
        .catch((e) => {
          commit('SET_LOADING', false);
          commit('SET_ERROR', e.message);
        });
    }, 3000);
  },

  updateUser({ commit }, payload) {
    const { id, name, username, email, password } = payload;
    commit('SET_LOADING', true);
    setTimeout(() => {
      Http.post(
        `?r=update_one_user&&id=${id}`,
        {
          name,
          username,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        }
      )
        .then(() => {
          commit('SET_LOADING', false);
          router.push({
            name: 'Dashboard',
          });
        })
        .catch((e) => {
          commit('SET_LOADING', false);
          commit('SET_ERROR', e.message);
        });
    }, 3000);
  },

  deleteUsers({ commit }, id) {
    const a = window.confirm('are you shur');
    if (a) {
      commit('SET_LOADING', true);
      setTimeout(() => {
        Http.get('?r=delete_one_user&&id=' + id)
          .then(() => {
            commit('SET_LOADING', false);
          })
          .catch((e) => {
            commit('SET_LOADING', false);
            commit('SET_ERROR', e.message);
          });
      }, 3000);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
