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
    async addTodo() {
      console.log("Add todo");
      console.log(this.todo);
      const newTodo = {
        text: this.todo,
      };
      await this.$store.dispatch('asyncAddTodo', newTodo);
      this.todo = "";
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos; 
    }
  },
};
</script>

<style lang="scss" scoped>
</style>