<template>
  <div>
    <DashboardNav>
      <h1 class="heading">Todo's</h1>
      <v-text-field
        v-model="todo"
        label="Enter todo"
        required
        @keypress.enter="addTodo"
      ></v-text-field>
      <p class="overline mt-8 mb-5">Click todo to mark or unmark it</p>
      <div>
        <div v-if="loading">
          <v-skeleton-loader
            type="list-item"
            v-for="x in 3"
            :key="x"
            height="60"
          ></v-skeleton-loader>
        </div>
        <div v-if="!loading">
          <Todo  @removeTodo="removeTodoTrigger" @toggleTodo="toggleTodoTrigger" v-for="todo in todos" :todo="todo" :key="todo.text"></Todo>
        </div>
      </div>
      <div>
      </div>
    </DashboardNav>
  </div>
</template>

<script>
import DashboardNav from "../components/DashboardNav";
import Todo from "../components/Todo";
import {addTodo, fetchTodos, deleteTodo} from '../services/TodoService';
export default {
  components: {
    DashboardNav,
    Todo
  },
  data() {
    return {
      todo: "",
      loading: true
    }
  },
  methods: {
    async removeTodoTrigger(id) {
      console.log(`Remove todo with id ${id}`);
      const removed = await deleteTodo(this.$store.state.token, id);
      switch (removed.response.status) {
        case 200:
          // Refresh ui (store)
          this.$store.dispatch('asyncDeleteTodo', id);
          break;
      
        default:
          break;
      }
    },
    async toggleTodoTrigger(id) {
      console.log(`Toggle todo with id ${id}`);
    },
    async showTodos() {
      console.log('Token:', this.$store.state.token);
      const todos = await fetchTodos(this.$store.state.token);
      console.log(todos);
      // if (todos.length > 0) {
        this.$store.dispatch('asyncSetTodos', todos);
      // }
      this.loading = false;
    },
    async addTodo() {
      const {status, todo} = await addTodo(this.todo, this.$store.state.token);
      switch (status) {
        case 201:
          await this.$store.dispatch('asyncAddTodo', todo)
          break;
        case 400:
          break;
        case 500:
          break;      
        default:
          break;
      }
      this.todo = "";
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos; 
    }
  },
  created () {
    this.$store.dispatch('asyncSetTodos', []);
    this.showTodos();
  },
};
</script>

<style lang="scss" scoped>
</style>