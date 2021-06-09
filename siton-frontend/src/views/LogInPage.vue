<template>
  <div>
    <v-card
      id="cardi"
      width="60vw"
      height="60vh"
      class="rounded-xl"
      elevation="24"
      dark
    >
      <v-container fluid class="all-container" fill-height>
        <v-row no-gutters fill-height>
          <v-col cols="6">
            <img class="cops-image" src="../assets/cops.jpg" />
          </v-col>
          <v-col cols="6">
            <v-btn rounded color="#292b64" @click="sendLogIn()">התחבר</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    sendLogIn() {
      this.$emit("logIn");
    }
  }
};
</script>

<style>
#cardi {
  background-color: #000d49;
  margin-top: 17vh;
}

.all-container {
  overflow: hidden;
  padding: 0 !important;
}

.cops-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
