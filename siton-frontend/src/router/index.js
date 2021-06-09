import Vue from "vue";
import VueRouter from "vue-router";
import Activities from "../views/ActivitiesPage";
import Map from "../views/MapPage";
import Reports from "../views/ReportsPage.vue";
import AboutSiton from "../views/AboutSitonPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/activities",
    name: "Activities",
    component: Activities
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "/",
    name: "Reports",
    component: Reports
  },
  {
    path: "/aboutSiton",
    name: "AboutSiton",
    component: AboutSiton
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
