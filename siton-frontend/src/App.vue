<template>
  <v-app>
    <activitiesPage> </activitiesPage>
  </v-app>
</template>

<script>
import ActivitiesPage from './views/ActivitiesPage';

export default {
  name: 'App',

  components: {
    ActivitiesPage,
  },

  data: () => ({
    //
  }),
};
</script>
