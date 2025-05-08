import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewEdit from "@/views/ViewEdit.vue"

const route = [
  // before creating the routes make sure that you have created the views for those routes

  {
    path: "/", // specifing by slash so this routes behaves as a root path, but in order to use custom route path we first need to set <RouterView /> in App.vuw file
    name: "notes",
    component: ViewNotes,
  },
  {
    path: "/stats",
    name: "stats",
    component: ViewStats,
  },
  {
    path: "/edit",
    name: "edit",
    component: ViewEdit
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: route,
});

export default router;
