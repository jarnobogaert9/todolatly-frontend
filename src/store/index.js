import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    todos: []
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
    addTodo(state, todo) {
      state.todos = [todo, ...state.todos];
    }
  },
  actions: {
    asyncSetToken({commit}, token) {
      commit('setToken', token);
    },
    asyncLogout({commit}) {
      commit('logout');
    },
    asyncAddTodo({commit}, todo) {
      commit('addTodo', todo);
    }
  },
  modules: {
  }
})
