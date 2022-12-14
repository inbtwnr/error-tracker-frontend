import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import DashBoard from "../views/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "AuthView",
    component: AuthView,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
