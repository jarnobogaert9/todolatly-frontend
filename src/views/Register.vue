<template>
  <div>
    <v-row class justify="center" algin="center" no-gutter>
      <v-col lg="6" class="mt-12">
        <v-alert v-if="msg" type="error">{{msg}}</v-alert>
        <h2>Register</h2>
        <v-form ref="form">
          <v-text-field v-model="user.username" label="Username"></v-text-field>
          <v-text-field v-model="user.password" label="Password"></v-text-field>
          <v-btn @click="registerAction" color="indigo white--text" :loading="loading">Register</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { BASE_API_URL } from "../config";
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      msg: "",
      loading: false
    };
  },
  methods: {
    async registerAction() {
      this.loading = true;
      const { username, password } = this.user;
      const response = await fetch(`${BASE_API_URL}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const json = await response.json();
      if (response.status == 400) {
        this.msg = json.msg;
      } else if (response.status == 200) {
        this.$store.dispatch("asyncSetToken", json.data.token);
        this.$router.push("/");
      }
      this.loading = false;
    }
  }
};
</script>

<style lang="css" scoped>
.form {
  width: 30%;
  margin: 0 auto;
}
.input {
  display: block;
}
.input input {
  padding: 0.8em 2em;
  margin: 0 0 1em 0;
  border-radius: 5px;
  border: 1px solid rgb(218, 218, 218);
  width: 100%;
  box-sizing: border-box;
}
button {
  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: rgb(108, 51, 214);
  color: #fff;
  border-radius: 5px;
  padding: 0.8em;
  cursor: pointer;
  transition: ease-in-out 0.09s;
}
button:hover {
  background-color: rgb(92, 43, 182);
}
</style>