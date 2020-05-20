<template>
  <v-app id="inspire">
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
    </v-navigation-drawer>

    <!-- Upper Navbar -->
    <v-app-bar
      app
      color="indigo"
      dark
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todo Application</v-toolbar-title>
      
      <v-spacer></v-spacer>
      <div v-if="!this.$store.state.token">
        <v-btn to="/login" text color="white">Login</v-btn>
        <v-btn to="/register" text color="white">Register</v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout" text color="white">Logout</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      this.$store.state.token = null;
      this.$router.push('/');
    }
  },
  data: () => ({
    drawer: false,
    links: [
      {
        route: '/',
        icon: 'mdi-home',
        text: 'Home'
      },
      {
        route: '/todos',
        icon: 'list_alt',
        text: 'Todos'
      },
      {
        route: '/profile',
        icon: 'account_circle',
        text: 'Profile'
      }
    ]
  }),
};
</script>
