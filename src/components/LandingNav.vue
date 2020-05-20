<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>
      <router-link class="brand white--text title" to="/">Todo</router-link>
      <v-spacer></v-spacer>
      <div v-if="!this.$store.state.token">
        <v-btn text router :to="{name: 'login'}">Login</v-btn>
        <v-btn text router :to="{name: 'register'}">Register</v-btn>
      </div>
      <div v-else>
        <v-btn text router :to="{name: 'dashboard'}">Back to dashboard</v-btn>
        <v-btn text @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
    <v-container>
      <slot></slot>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("asyncLogout");
      this.$router.push('/');
    }
  },
};
</script>

<style lang="css" scoped>
.brand {
  text-decoration: none;
}
</style>