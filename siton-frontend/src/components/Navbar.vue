<template>
  <v-navigation-drawer
    absolute
    permanent
    right
    color="#040848"
    dark
    width="350"
  >
    <v-list-item two-line>
      <v-list-item-content class="text-center">
        <v-list-item-avatar height="100" width="100">
          <img
            id="user-img"
            src="https://randomuser.me/api/portraits/women/81.jpg"
          />
        </v-list-item-avatar>
        <v-list-item-title class="font-weight-bold">
          <h1>סיטון</h1>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item-group mandatory>
        <v-list-item
          v-for="option in options"
          :key="option.title"
          link
          :to="option.link"
          class="nav-item"
        >
          <v-list-item-icon>
            <v-icon>{{ option.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <h3>{{ option.title }}</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navbar",

  data() {
    return {
      options: [
        {
          title: "לוח פעילויות",
          icon: "mdi-clipboard-text",
          link: "/"
        },
        { title: "מפה", icon: "mdi-map", link: "/map" },
        { title: "דיווחים", icon: "mdi-cellphone-nfc", link: "/reports" }
      ]
    };
  }
};
</script>

<style scoped>
.drawer {
  width: 30vw;
}

.nav-item {
  padding-right: 1vw;
}
</style>
