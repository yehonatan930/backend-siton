<template>
  <div>
    <v-list class="transparent mt-10">
      <v-list-item>
        <v-list-item-title>
          <h1 class="display-2">{{this.activity_type}} - {{this.activity_goal}}</h1>
        </v-list-item-title>
        <v-list-item-subtitle class="text-right"
          ><h2 class="display-2">
            {{this.activity_time}}
          </h2>
        </v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
    props: ['activity_type', 'activity_goal', 'activity_time']
};
</script>

<style>
#title {
  color: #3e4174;
}

</style>
