<template>
  <div class="mb-4">
    <v-card elevation="2" class="mx-auto">
      <v-card-text>
        <div class="text--primary">
          {{todo.text}}
          <v-icon class="float-right" @click="removeTodo(todo._id)">delete</v-icon>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    removeTodo(id) {
      this.$emit('removeTodo', id);
    }
  },
};
</script>

<style lang="css" scoped>
</style>