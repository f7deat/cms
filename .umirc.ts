import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Component',
      path: '/works',
      hideInMenu: true,
      routes: [
        {
          name: 'html',
          path: '/works/html/:id',
          component: './works/html',
        },
      ],
    },
    {
      name: 'CSS',
      path: '/works/css/:id',
      component: './works/css',
    },
    {
      name: 'Row',
      path: '/works/row/:id',
      component: './works/row',
      hideInMenu: true,
    },
    {
      name: 'Image',
      path: '/works/image/:id',
      component: './works/image',
      hideInMenu: true,
    },
    {
      name: 'Navbar',
      path: '/works/navbar/:id',
      component: './works/navbar',
      hideInMenu: true,
    },
    {
      name: 'Catalog',
      path: 'catalog/:id',
      component: './Home',
      hideInMenu: true,
    },
  ],
  npmClient: 'yarn',
});
