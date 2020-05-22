<template>
  <div>
    <DashboardNav>
      <h1 class="heading">Todos</h1>
      <v-text-field
        v-model="todo"
        label="Enter todo"
        required
        @keypress.enter="addTodo"
      ></v-text-field>
      <div>
        <p v-for="todo in todos" :key="todo.text">{{todo.text}}</p>
      </div>
      <div>
      </div>
    </DashboardNav>
  </div>
</template>

<script>
import DashboardNav from "../components/DashboardNav";
import {addTodo, fetchTodos} from '../services/TodoService';
export default {
  components: {
    DashboardNav
  },
  data() {
    return {
      todo: ""
    }
  },
  methods: {
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
    this.showTodos();
  },
};
</script>

<style lang="scss" scoped>
</style>