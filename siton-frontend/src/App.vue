<template>
  <v-app>
    <activitiesPage> </activitiesPage>
  <v-app id="app">
    <Navbar></Navbar>
    <v-main> </v-main>
  </v-app>
</template>

<script>
import ActivitiesPage from './views/ActivitiesPage';
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    ActivitiesPage,
    Navbar: Navbar
  },

  data() {
    return {};
  }
};
</script>
<style scoped></style>
