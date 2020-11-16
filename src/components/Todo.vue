<template>
  <div class="mb-4">
    <v-card elevation="2" class="mx-auto">
      <div class="hover" @click="toggleTodo(todo._id)" title="Toggle todo">
      <v-card-text>
        <div class="text--primary">
          <span :class="{toggled: todo.done}" class="todo">{{todo.text}}</span>
          <v-icon v-if="todo.done" class="float-right" @click="removeTodo(todo._id)" title="Remove todo">delete</v-icon>
        </div>
      </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id);
    },
    toggleTodo(id) {
      this.todo.done = !this.todo.done;
      this.$emit('toggleTodo', id);
    }
  },
};
</script>

<style lang="css" scoped>
.todo {
  cursor: pointer;
}
.toggled {
  text-decoration: line-through;
}
.hover {
  cursor: pointer;
}
</style>