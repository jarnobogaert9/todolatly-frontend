<template>
  <div>
    <!-- Left Navbar -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :clipped="$vuetify.breakpoint.lgAndUp"
    >
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route" link>
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn :to="{name: 'home'}" block>Exit Application</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- Upper Navbar -->
    <v-app-bar
      app
      color="deep-purple accent-4"
      dark
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todolatly</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <div v-if="!this.$store.state.token">
        <v-btn to="/login" text color="white">Login</v-btn>
        <v-btn to="/register" text color="white">Register</v-btn>
      </div>
      <div v-else>
        <!-- <v-btn @click="logout" text color="white">Logout</v-btn> -->
        <v-icon @click="logout">exit_to_app</v-icon>
      </div>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="8" offset="2">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {fetchProfile} from "../services/UserService";
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          text: 'Dashboard',
          route: '/dashboard',
          icon: 'home'
        },
        {
          text: 'Todos',
          route: '/todos',
          icon: 'list_alt'
        },
        {
          text: 'Profile',
          route: '/profile',
          icon: 'account_circle'
        }
      ]
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("asyncLogout");
      this.$router.push('/');
    },
    async authenticated() {
      const { token } = this.$store.state;
      const profile = await fetchProfile(token);
      if (!profile) {
        localStorage.removeItem('token');
        this.$store.state.token = null;
        this.$router.push({name: "login", params: {msg: "You are not authenticated, please log in first."}});
      }
    }
  },
  created () {
    this.authenticated();
  },
};
</script>

<style lang="css" scoped>
</style>