import { createRouter, createWebHashHistory } from "vue-router";
import { useStoreAuth } from "@/stores/storeAuth";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";
import ViewEdit from "@/views/ViewEdit.vue";
import ViewAuth from "@/views/ViewAuth.vue";

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
    path: "/edit/:id",
    name: "edit",
    component: ViewEdit
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: route,
});

router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()

  if(!storeAuth.user.uid && to.name !== 'auth'){
    return {name: 'auth'}
  }

  if(storeAuth.user.uid && to.name === 'auth'){
    return false
  }
  
})

export default router;
