<template>
  <v-app id="app">
    <v-main>
      <div class="d-flex justify-center">
        <div v-if="login">
          <LogInPage @logIn="logIn"></LogInPage>
        </div>
        <div v-else>
          <v-card
            id="card"
            width="88.5vw"
            height="82.5vh"
            class="rounded-xl"
            elevation="24"
          >
            <router-view class="view" />
            <Navbar :user="user" class="rounded-r-xl"></Navbar>
          </v-card>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import LogInPage from "./views/LogInPage";

export default {
  name: "App",

  components: {
    Navbar,
    LogInPage
  },

  data() {
    return {
      login: true,
      user: {}
    };
  },

  methods: {
    logIn(user) {
      this.login = false;
      this.user = user.user;
    }
  }
};
</script>

<style>
@font-face {
  font-family: "Heebo";
  src: url("./assets/Heebo-VariableFont_wght.ttf");
}

#app {
  font-family: "Heebo" !important;
  background-color: #e9ebf7;
}

.v-application .display-4 {
  font-family: "Heebo" !important;
}

.v-application .display-3 {
  font-family: "Heebo" !important;
}

.v-application .display-2 {
  font-family: "Heebo" !important;
}

.v-application .display-1 {
  font-family: "Heebo" !important;
}

#card {
  background-color: #f8f9fb;
  margin-top: 4.5%;
}

.view {
  margin-right: 21%;
  padding-top: 2.8%;
}
</style>
