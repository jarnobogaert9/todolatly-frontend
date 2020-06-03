<template>
  <div class="mb-4">
    <v-card elevation="2" class="mx-auto">
    <!-- <v-card class="mx-auto"> -->
      <v-card-text>
        <div class="text--primary">
          {{todo.text}}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['todo'],
};
</script>

<style lang="css" scoped>
</style>