import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginForm.vue") }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/RecentLogs', component: () => import('src/pages/RecentLogs/RecentLogs.vue') },
      { path: '/Records', component: () => import('src/pages/Records/RecordsMenu.vue') },
      { path: '/Accounts', component: () => import('src/pages/Accounts/AccountsMenu.vue') },
      { path: '/RecordsStudent', component: () => import('src/pages/Records/RecordsStudent.vue') },
      { path: '/RecordsLandlord', component: () => import('src/pages/Records/RecordsLandlord.vue') },
      { path: '/AccountsCreateForm', component: () => import('src/pages/Accounts/AccountsCreateForm.vue') },
      { path: '/AccountsDeleteForm', component: () => import('src/pages/Accounts/AccountsDeleteForm.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
