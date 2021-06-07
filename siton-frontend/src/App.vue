<template>
  <v-app id="app">
    <div class="d-flex justify-center">
      <v-card width="1200" height="500" class="mt-10 rounded-xl">
        <h1 class="display-4 d-flex justify-center" id="title">לוח פעילויות</h1>
        <ActivitiesPage
          v-moel="this.activities"
          class="d-flex justify-center mr-15"
        >
        </ActivitiesPage>

        <Navbar class="rounded-r-xl"></Navbar>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import ActivitiesPage from "./views/ActivitiesPage";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    ActivitiesPage,
    Navbar: Navbar
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped></style>
