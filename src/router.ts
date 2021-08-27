import { createRouter, RouteParams, createWebHistory } from "vue-router";
import Users from "./pages/Users.vue";
import Accounts from "./pages/Accounts.vue";
import MainLayout from "./pages/layout/MainLayout.vue";

export type AppRouteNames = "users" | "accounts";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          name: "users",
          path: "/",
          component: Users,
        },
        {
          name: "accounts",
          path: "/accounts/:id",
          component: Accounts,
        },
      ],
    },
  ],
});

export function routerPush(
  name: AppRouteNames,
  params?: RouteParams
): ReturnType<typeof router.push> {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    });
  } else {
    return router.push({ name });
  }
}