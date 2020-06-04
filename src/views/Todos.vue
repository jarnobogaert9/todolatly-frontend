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
        <Todo @removeTodo="removeTodoTrigger" @toggleTodo="toggleTodoTrigger" v-for="todo in todos" :todo="todo" :key="todo.text"></Todo>
      </div>
      <div>
      </div>
    </DashboardNav>
  </div>
</template>

<script>
import DashboardNav from "../components/DashboardNav";
import Todo from "../components/Todo";
import {addTodo, fetchTodos} from '../services/TodoService';
export default {
  components: {
    DashboardNav,
    Todo
  },
  data() {
    return {
      todo: ""
    }
  },
  methods: {
    async removeTodoTrigger(id) {
      console.log(`Remove todo with id ${id}`);
    },
    async toggleTodoTrigger(id) {
      console.log(`Toggle todo with id ${id}`);
    },
    async showTodos() {
      const todos = await fetchTodos(this.$store.state.token);
      if (todos.length > 0)
        this.$store.dispatch('asyncSetTodos', todos);
    },
    async addTodo() {
      console.log("Add todo");
      console.log(this.todo);
      const newTodo = {
        text: this.todo,
      };
      await this.$store.dispatch('asyncAddTodo', newTodo);
      const result = await addTodo(this.todo, this.$store.state.token);
      switch (result) {
        case 201:
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