import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', JSON.stringify(token));
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {
    asyncSetToken({commit}, token) {
      commit('setToken', token);
    },
    asyncLogout({commit}) {
      commit('logout');
    }
  },
  modules: {
  }
})
