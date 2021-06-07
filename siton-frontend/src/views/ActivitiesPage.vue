<template>
  <div>
    <h1 class="display-4 d-flex justify-center" id="title">פעילויות</h1>
    <div class="d-flex justify-center">
      <v-card width="700" shaped class="mt-5">
        <Activity> </Activity>
        <v-btn class="mx-2 mb-5 mt-5" fab dark color="#3e4174">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-card>
    </div>
  </div>
</template>

<script>
import Activity from "../components/Activity";

export default {
  components: {
    Activity
  }
};
</script>

<style></style>
