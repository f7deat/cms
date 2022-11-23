import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Waffle',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/accounts',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/accounts/login',
          component: './accounts/login',
        },
      ],
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
      path: '/files',
      routes: [
        {
          path: '/files',
          redirect: '/files/list',
        },
        {
          path: '/files/list',
          component: './files',
        },
        {
          name: 'File Center',
          path: '/files/center/:id',
          component: './files/center',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'Settings',
      path: '/settings',
      routes: [
        {
          path: '/settings',
          redirect: '/settings/list',
        },
        {
          name: 'General',
          path: '/settings/general',
          component: './settings',
        },
        {
          name: 'Style',
          path: '/settings/css',
          component: './settings/css',
        },
      ],
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
