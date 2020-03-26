import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Event from "@/views/Event.vue";
import Speaker from "@/views/Speaker.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    path: "/",
    redirect: "/event"
  },
  {
    path: "/speaker",
    name: "speaker",
    component: Speaker
  },
  {
    path: "/event",
    name: "event",
    component: Event
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.replace({ path: "/", redirect: "/event" });
export default router;
