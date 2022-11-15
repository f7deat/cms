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
        {
          name: 'contact-form',
          path: '/works/contactform/:id',
          component: './works/contact-form',
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
          name: 'Swiper',
          path: '/works/swiper/:id',
          component: './works/swiper',
          hideInMenu: true,
        },
        {
          name: 'CSS',
          path: '/works/css/:id',
          component: './works/css',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'Catalog',
      path: 'catalog/:id',
      component: './catalog',
      hideInMenu: true,
    },
    {
      name: 'File manager',
      path: 'files',
      component: './files',
    },
    {
      name: 'Settings',
      path: 'settings',
      component: './settings',
    },
    {
      name: 'SendGrid',
      path: '/settings/sendgrid/:id',
      component: './settings/sendgrid',
      hideInMenu: true,
    },
    {
      name: 'Help',
      path: '/help',
      routes: [
        {
          name: 'Upgrade',
          path: '/help/upgrade',
          component: './settings/upgrade',
        },
        {
          name: 'Backup',
          path: 'backup',
          component: './backup',
        },
      ],
    },
    {
      name: 'Features',
      path: 'features',
      routes: [
        {
          name: 'Contact',
          path: '/features/contacts',
          component: './features/contacts',
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
