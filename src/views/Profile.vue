<template>
  <div>
    <DashboardNav>
    <div v-if="loading" class="text-center mt-12">
      <v-progress-circular indeterminate color="primary" size="40"></v-progress-circular>
    </div>
    <div v-if="!loading">
      <v-row class justify="center" algin="center" no-gutter>
        <v-col lg="8" class="mt-2">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">PROFILE</div>
                <v-list-item-title class="headline mb-1">Username: {{this.user.username}}</v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn text color="indigo">Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    </DashboardNav>
  </div>
</template>

<script>
import {BASE_API_URL} from '../config';
import DashboardNav from '../components/DashboardNav';

export default {
  components: {
    DashboardNav
  },
  data() {
    return {
      loading: true,
      user: null
    };
  },
  methods: {
    async fetchProfile() {
      const {token} = this.$store.state;

      const response = await fetch(`${BASE_API_URL}/users/profile?token=${token}`);
      
      const json = await response.json();
      console.log(json);
      
      this.user = json.data;
      this.loading = false;
    }
  },
  created() {
    this.fetchProfile();
  }
};
</script>

<style lang="scss" scoped>
</style>