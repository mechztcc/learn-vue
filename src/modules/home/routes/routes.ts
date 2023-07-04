const HomeRoutes = [
  {
    path: '/login',
    name: 'Entrar',
    meta: {
      title: 'Faça seu login',
    },
    component: (): Promise<typeof import('*.vue')> =>
      import(/* webpackChunkName: "login" */ '../pages/Login.vue'),
  },
];

export default HomeRoutes;
