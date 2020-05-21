<template>
  <div>
    <DashboardNav>
      <h1>Hello welcome to your dashboard <span v-if="user">{{user.username}}</span></h1>
      <v-overlay opacity="0.8" :value="overlay">
        <v-progress-circular indeterminate color="white" size="40"></v-progress-circular>
      </v-overlay>
    </DashboardNav>
  </div>
</template>

<script>
import DashboardNav from "../components/DashboardNav";
import { fetchProfile } from "../services/UserService";
export default {
  name: "Dashboard",
  components: {
    DashboardNav
  },
  data() {
    return {
      user: {},
      overlay: false
    };
  },
  methods: {
    async loadProfile() {
      const { token } = this.$store.state;
      const profile = await fetchProfile(token);
      this.user = profile;
    }
  },
  async created() {
    await this.loadProfile();
    this.overlay = false;
  }
};
</script>

<style lang="css" scoped>
</style>