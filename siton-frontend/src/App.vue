<template>
  <v-app id="app">
    <div class="d-flex justify-center">
      <v-card width="1200" height="500" class="mt-10 rounded-xl">
        <router-view />
        <Navbar class="rounded-r-xl"></Navbar>
      </v-card>
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

<style scoped></style>
