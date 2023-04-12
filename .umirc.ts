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
      name: 'component',
      path: '/works',
      hideInMenu: true,
      routes: [
        {
          name: 'contactForm',
          path: '/works/contactform/:id',
          component: './works/contact-form',
        },
        {
          name: 'feed',
          path: '/works/feed/:id',
          component: './works/feed',
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
          name: 'googleMap',
          path: '/works/googlemap/:id',
          component: './works/google-map',
          hideInMenu: true,
        },
        {
          name: 'jumbotron',
          path: '/works/jumbotron/:id',
          component: './works/jumbotron',
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
        {
          name: 'tag',
          path: '/works/tag/:id',
          component: './works/tag',
          hideInMenu: true,
        },
        {
          name: 'navItem',
          path: '/works/nav-item/:id',
          component: './works/navbar/nav-item',
          hideInMenu: true,
        },
        {
          name: 'link',
          path: '/works/link/:id',
          component: './works/link',
          hideInMenu: true,
        },
        {
          name: 'listGroup',
          path: '/works/listgroup/:id',
          component: './works/list-group',
          hideInMenu: true,
        },
        {
          name: 'wordPressPost',
          path: '/works/wordpresspost/:id',
          component: './works/wordpress-post',
          hideInMenu: true,
        },
      ],
    },
    {
      name: 'catalog',
      path: '/catalog',
      icon: 'SlackOutlined',
      routes: [
        {
          path: '/catalog/:id',
          component: './catalog',
          hideInMenu: true,
        },
        {
          name: 'tag',
          path: '/catalog/tag',
          component: './tag',
        },
        {
          name: 'tagCenter',
          path: '/catalog/tag/:id',
          component: './tag/center',
          hideInMenu: true,
        },
        {
          name: 'page',
          path: '/catalog/page',
          component: './catalog/page',
        },
      ],
    },
    {
      icon: 'ShoppingCartOutlined',
      name: 'ecommerce',
      path: '/ecommerce',
      routes: [
        {
          name: 'order',
          path: '/ecommerce/order',
          component: './order',
        },
        {
          path: '/ecommerce/product',
          name: 'product',
          component: './shop',
        },
        {
          name: 'center',
          path: '/ecommerce/product/center/:id',
          component: './shop/center',
          hideInMenu: true,
        },
      ],
    },
    {
      icon: 'TeamOutlined',
      name: 'users',
      path: '/users',
      routes: [
        {
          path: '/users',
          redirect: '/users/list',
        },
        {
          path: '/users/list',
          component: './users/list',
        },
        {
          name: 'profile',
          path: '/users/profile/:id',
          component: './users/profile',
          hideInMenu: true,
        },
        {
          name: 'center',
          path: '/users/center/:id',
          component: './users/center',
          hideInMenu: true,
        },
      ],
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
          name: 'component',
          path: '/settings/component',
          component: './blocks',
        },
        {
          name: 'componentCenter',
          path: '/settings/component/center/:id',
          component: './blocks/center',
          hideInMenu: true,
        },
        {
          name: 'footer',
          path: '/settings/footer/:id',
          component: './settings/footer',
          hideInMenu: true,
        },
        {
          name: 'header',
          path: '/settings/header/:id',
          component: './settings/header',
          hideInMenu: true,
        },
        {
          name: 'style',
          path: '/settings/css',
          component: './settings/css',
        },
        {
          name: 'telegram',
          path: '/settings/telegram/:id',
          component: './settings/telegram',
        },
        {
          name: 'sendGrid',
          path: '/settings/sendgrid/:id',
          component: './settings/sendgrid',
          hideInMenu: true,
        },
        {
          name: 'facebook',
          path: '/settings/facebook/:id',
          component: './settings/facebook',
          hideInMenu: true,
        },
        {
          name: 'sidebar',
          path: '/settings/sidebar/:id',
          component: './settings/sidebar',
          hideInMenu: true,
        },
        {
          name: 'social',
          path: '/settings/social/:id',
          component: './settings/social',
          hideInMenu: true,
        },
        {
          name: 'localization',
          path: '/settings/localization',
          component: './localization',
        },
      ],
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
      icon: 'SlackOutlined',
      name: 'article',
      path: '/article',
      routes: [
        {
          path: '/article',
          redirect: '/article/list',
        },
        {
          name: 'list',
          path: '/article/list',
          component: './article/list',
          hideInMenu: true,
        },
        {
          name: 'home',
          path: '/article/home/:id',
          component: './article',
          hideInMenu: true,
        },
        {
          name: 'center',
          path: '/article/center/:id',
          component: './article/center',
          hideInMenu: true,
        },
      ],
    },
  ],
  npmClient: 'yarn',
});
