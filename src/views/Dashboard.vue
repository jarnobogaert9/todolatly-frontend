<template>
  <div>
    <DashboardNav>
      <h1>Hello welcome to your dashboard <span v-if="user">{{user.username}}</span></h1>
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
      user: {}
    };
  },
  methods: {
    async loadProfile() {
      const { token } = this.$store.state;
      const profile = await fetchProfile(token);
      this.user = profile;
    }
  },
  created() {
    this.loadProfile();
  }
};
</script>

<style lang="css" scoped>
</style>