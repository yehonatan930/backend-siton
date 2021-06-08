<template>
  <v-app id="app">
    <div class="d-flex justify-center">
      <div class="align-center">
        <v-card
          id="card"
          width="1700"
          height="800"
          class="rounded-xl"
          elevation="24"
        >
          <router-view class="view" />
          <Navbar class="rounded-r-xl"></Navbar>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  },

  data() {
    return {};
  },
  methods: {}
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
  margin-top: 8vh;
}

.view {
  margin-right: 18vw;
  padding-top: 5vh;
}
</style>
