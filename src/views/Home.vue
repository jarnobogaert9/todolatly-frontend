<template>
  <div>
    <LandingNav>
      <v-row>
        <v-col offset="2" cols="8">
          <div class="mt-8">
            <h1 class="display-3">Hello,</h1>
            <p class="display-1">Get things done with todolatly.</p>
          </div>
          <div class="mt-8">
            <h1 class="title">What is todolatly?</h1>
            <p>Todolatly is a productivity tool to track tasks you need to accomplish.</p>
          </div>
          <div class="mt-8">
            <h1 class="title">Why todolatly?</h1>
            <p>Due a minimalistic user interface all your focus will go to the tasks. As a result you will get more things done compared to the competition.</p>
          </div>
        </v-col>
      </v-row>
    </LandingNav>
  </div>
</template>

<script>
import LandingNav from "../components/LandingNav";
export default {
  name: "Home",
  components: {
    LandingNav
  }
};
</script>

<style lang="css" scoped>
</style>