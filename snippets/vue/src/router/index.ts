import { createWebHistory, createRouter } from "vue-router";
import Signin from "@/pages/signin/Signin.vue";

const routes = [
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;