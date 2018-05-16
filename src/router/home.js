import addComponent from './addComponent';

const navTop = require('@/page/NavMenu/top.vue');
const navSide = require('@/page/NavMenu/side');

const LayoutTop = r => require.ensure([], () => r(navTop), 'LayoutTop');
const LayoutSide = r => require.ensure([], () => r(navSide), 'LayoutSide');

export const routerMap = [
  {
    component: LayoutTop,
    redirect: 'myWms/home',
    path: '/',
    children: [
      {
        name: 'myWms',
        path: 'myWms',
        component: LayoutSide,
        redirect: 'myWms/home',
        icon: '&#xe641;',
        nav: 1,
        children: [
          {
            path: 'home',
            name: 'home',
            nav: 2,
          },
          {
            path: 'editPassword',
            name: 'editPassword',
            nav: 2,
          },
        ],
      },
      {
        name: 'userManage',
        path: 'userManage',
        component: LayoutSide,
        redirect: 'userManage/userList',
        icon: '&#xe67f;',
        nav: 1,
        children: [
          {
            name: 'userList',
            path: 'userList',
            nav: 2,
          },
          {
            name: 'userAdd',
            path: 'userList/userAdd',
            nav: 0,
          },
          {
            name: 'userGroupList',
            path: 'userGroupList',
            nav: 2,
          },
          {
            name: 'manageAdd',
            path: 'userGroupList/manageAdd',
            nav: 0,
          },
          {
            name: 'userGroupAdd',
            path: 'userGroupList/userGroupAdd',
            nav: 0,
          },
          {
            name: 'storeInfoDetails',
            path: 'userGroupList/storeInfoDetails',
            nav: 0,
          },
          {
            name: 'storeSubmitDetails',
            path: 'userGroupList/storeSubmitDetails',
            nav: 0,
          },
        ],
      },
      {
        name: 'authManage',
        path: 'authManage',
        component: LayoutSide,
        redirect: 'authManage/authList',
        icon: '&#xe625;',
        nav: 1,
        children: [
          {
            name: 'authList',
            path: 'authList',
            nav: 2,
          },
          {
            name: 'authInfo',
            path: 'authList/authInfo',
            nav: 0,
          },
          {
            name: 'storeList',
            path: 'authList/storeList',
            nav: 0,
          },
          {
            name: 'storeInfo',
            path: 'authList/storeInfo',
            nav: 0,
          },
          {
            name: 'renterList',
            path: 'renterList',
            nav: 2,
          },
          {
            name: 'renterInfo',
            path: 'renterList/renterInfo',
            nav: 0,
          },
          {
            name: 'staffList',
            path: 'staffList',
            nav: 2,
          },
        ],
      },
      {
        name: 'storeManage',
        path: 'StoreManage',
        icon: '&#xe88d;',
        component: LayoutSide,
        redirect: 'StoreManage/commodityManage',
        nav: 1,
        children: [
          {
            name: 'commodityManage',
            path: 'commodityManage',
            nav: 2,
          },
          {
            name: 'commodityInfo',
            path: 'storeManage/commodityInfo',
            nav: 0,
          },
          {
            name: 'commodityEdit',
            path: 'commodityManage/commodityEdit',
            nav: 0,
          },
        ],
      },
    ],
  },
];
addComponent(routerMap);
export const homeRoute = [
  {
    component: LayoutTop,
    redirect: 'myWms/home',
    path: '/',
    children: [],
  },
  {
    name: 'login',
    path: '/login',
  },
  {
    name: 'register',
    path: '/register',
  },
  {
    name: 'backPassword',
    path: '/backPassword',
  },
];

addComponent(homeRoute);
