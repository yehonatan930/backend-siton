<template>
  <div>
    <v-list class="transparent mt-10">
      <v-list-item>
        <v-list-item-title>
          <h1 class="text-right">{{this.event_name}}</h1>
        </v-list-item-title>
        <v-list-item-subtitle class="text-left"
          ><h1>
            {{this.event_time_date}} {{this.event_time}}
          </h1>
        </v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['event_name', 'event_time_date', 'event_time']
};
</script>

<style>
#title {
  color: #3e4174;
}
</style>
