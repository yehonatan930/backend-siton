<template>
  <v-app id="app">
    <Navbar></Navbar>
    <v-main> </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar: Navbar
  },

  data() {
    return {};
  }
};
</script>
<style scoped></style>
