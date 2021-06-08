<template>
  <div>
    <v-list class="transparent mt-10">
      <v-list-item>
        <v-list-item-title>
          <h2 class="text-right">{{this.event_name}}</h2>
        </v-list-item-title>
        <v-list-item-subtitle class="text-left"
          ><h2>
            {{this.event_time_date}} {{this.event_time}}
          </h2>
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
