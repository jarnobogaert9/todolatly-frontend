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
    },
    setTodos(state, todos) {
      state.todos = [...todos.reverse()];
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter(x => x._id != todoId);
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
    },
    asyncSetTodos({commit}, todos) {
      commit('setTodos', todos);
    },
    asyncDeleteTodo({commit}, todoId) {
      commit('deleteTodo', todoId);
    }
  },
  modules: {
  }
})
