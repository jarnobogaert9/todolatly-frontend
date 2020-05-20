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
      <v-btn to="/login" text color="white">Login</v-btn>
      <v-btn text color="white">Register</v-btn>
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
        route: '/about',
        icon: 'account_circle',
        text: 'Profile'
      }
    ]
  }),
};
</script>
