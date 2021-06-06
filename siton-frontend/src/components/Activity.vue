<template>
  <div>
    <v-card width="700" shaped class="mt-5">
      <h1 class="display-4 d-flex justify-center" id="title">פעילויות</h1>
      <v-list class="transparent mt-10">
        <v-list-item>
          <v-list-item-title>
            <h1 class="display-2">Label 1</h1></v-list-item-title
          >
          <v-list-item-subtitle class="text-right"
            ><h2 class="display-2">
              Details
            </h2>
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider></v-divider>

      </v-list>
      <v-btn class="mx-2 mb-5 mt-5" fab dark color="#3e4174">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
#title {
  color: #3e4174;
}
</style>
