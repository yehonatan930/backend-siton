<template>
  <div height="150">
    <v-list class="transparent mt-10" >
      <v-list-item >
        <v-list-item-title>
          <h1 class="text-right">{{this.activity_name}}</h1>
        </v-list-item-title>
        <v-list-item-subtitle class="text-left"
          ><h1>
            {{this.activity_time}}
          </h1>
        </v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
    props: ['activity_name', 'activity_time']
};
</script>

<style>
#title {
  color: #3e4174;
}

</style>
