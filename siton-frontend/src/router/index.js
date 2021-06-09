import Vue from "vue";
import VueRouter from "vue-router";
import Activities from "../views/ActivitiesPage";
import Map from "../views/MapPage";
import Reports from "../views/ReportsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Activities",
    component: Activities
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
