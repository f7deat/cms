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
  locale: {
    default: 'vi-VN',
    baseSeparator: '-',
    antd: true,
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
      icon: 'HomeOutlined',
      name: 'home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'shop',
      path: '/shop/:id',
      component: './shop',
      hideInMenu: true,
    },
    {
      name: 'component',
      path: '/works',
      hideInMenu: true,
      routes: [
        {
          name: 'html',
          path: '/works/html/:id',
          component: './works/html',
        },
        {
          name: 'contactForm',
          path: '/works/contactform/:id',
          component: './works/contact-form',
        },
        {
          name: 'row',
          path: '/works/row/:id',
          component: './works/row',
          hideInMenu: true,
        },
        {
          name: 'image',
          path: '/works/image/:id',
          component: './works/image',
          hideInMenu: true,
        },
        {
          name: 'navbar',
          path: '/works/navbar/:id',
          component: './works/navbar',
          hideInMenu: true,
        },
        {
          name: 'swiper',
          path: '/works/swiper/:id',
          component: './works/swiper',
          hideInMenu: true,
        },
        {
          name: 'blockEditor',
          path: '/works/blockeditor/:id',
          component: './works/block-editor',
          hideInMenu: true,
        },
        {
          name: 'card',
          path: '/works/card/:id',
          component: './works/card',
          hideInMenu: true,
        },
        {
          name: 'column',
          path: '/works/column/:id',
          component: './works/column',
          hideInMenu: true,
        },
        {
          name: 'css',
          path: '/works/css/:id',
          component: './works/css',
          hideInMenu: true,
        },
        {
          name: 'masonry',
          path: '/works/masonry/:id',
          component: './works/masonry',
          hideInMenu: true,
        },
        {
          name: 'lookbook',
          path: '/works/lookbook/:id',
          component: './works/lookbook',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'catalog',
      path: 'catalog/:id',
      component: './catalog',
      hideInMenu: true,
    },
    {
      icon: 'FolderOutlined',
      name: 'fileManager',
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
          name: 'fileCenter',
          path: '/files/center/:id',
          component: './files/center',
          hideInMenu: true,
        },
      ],
    },
    {
      icon: 'SettingOutlined',
      name: 'settings',
      path: '/settings',
      routes: [
        {
          path: '/settings',
          redirect: '/settings/list',
        },
        {
          name: 'general',
          path: '/settings/general',
          component: './settings',
        },
        {
          name: 'style',
          path: '/settings/css',
          component: './settings/css',
        },
      ],
    },
    {
      name: 'sendGrid',
      path: '/settings/sendgrid/:id',
      component: './settings/sendgrid',
      hideInMenu: true,
    },
    {
      icon: 'InfoCircleOutlined',
      name: 'help',
      path: '/help',
      routes: [
        {
          name: 'upgrade',
          path: '/help/upgrade',
          component: './settings/upgrade',
        },
        {
          name: 'backup',
          path: 'backup',
          component: './backup',
        },
      ],
    },
    {
      icon: 'AppstoreAddOutlined',
      name: 'features',
      path: 'features',
      routes: [
        {
          name: 'contact',
          path: '/features/contacts',
          component: './features/contacts',
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
