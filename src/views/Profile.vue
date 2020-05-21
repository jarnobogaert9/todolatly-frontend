<template>
  <div>
    <DashboardNav>
      <div v-if="loading" class="text-center mt-12">
        <v-progress-circular indeterminate color="primary" size="40"></v-progress-circular>
      </div>
      <div v-if="!loading">
        <v-row class justify="center" algin="center" no-gutter>
          <v-col lg="12" class="mt-2">
            <v-card class="" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">PROFILE</div>
                  <v-list-item-title class="headline mb-1">Username: <span v-if="user">{{this.user.username}}</span></v-list-item-title>
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
import DashboardNav from "../components/DashboardNav";
import {fetchProfile} from "../services/UserService";
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
    async loadProfile() {
      const { token } = this.$store.state;
      const profile = await fetchProfile(token);
      this.user = profile;
      this.loading = false;
    }
  },
  created() {
    this.loadProfile();
  }
};
</script>

<style lang="scss" scoped>
</style>