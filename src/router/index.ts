import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// Layouts
import AppHeader from "../layouts/TheHeader.vue";
import AppPageHeader from "../layouts/ThePageHeader.vue";
import AppFooter from "../layouts/TheFooter.vue";

// App Views
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";

import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: () => import("../layouts/TheWrapper.vue"),
    children: [
      {
        path: "/",
        name: "app.home",
        components: {
          header: AppHeader,
          default: Home,
          footer: AppFooter,
        },
        meta: { auth: false },
        beforeEnter: (to, from, next) => {
          if (store.getters["auth/authenticationStatus"] && from.meta?.auth) {
            next({ name: `app.dashboard` });
          } else {
            next();
          }
        },
      },
      {
        path: "/signin",
        name: "app.signin",
        components: {
          default: SignIn,
        },
        meta: { auth: false },
      },
      {
        path: "/home",
        name: "app.dashboard",
        components: {
          header: AppHeader,
          "page-header": AppPageHeader,
          default: Dashboard,
          footer: AppFooter,
        },
        meta: { auth: true },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
