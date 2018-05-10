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
            name: 'userGroupAdd',
            path: 'userGroupList/userGroupAdd',
            nav: 0,
          },
        ],
      },
      {
        name: 'commodityManage',
        path: 'commodityManage',
        component: LayoutSide,
        redirect: 'commodityManage/MyGoodsList',
        icon: '&#xe625;',
        nav: 1,
        children: [
          {
            name: 'MyGoodsList',
            path: 'MyGoodsList',
            nav: 2,
          },
          {
            name: 'goodsAddEdit',
            path: 'MyGoodsList/goodsAddEdit',
            nav: 0,
          },
          {
            name: 'inventoryManage',
            path: 'inventoryManage',
            nav: 2,
          },
          {
            name: 'goodsAlarm',
            path: 'goodsAlarm',
            nav: 2,
          },
          {
            name: 'inboundList',
            path: 'inboundList',
            nav: 2,
          },
          {
            name: 'addInbound',
            path: 'inboundList/addInbound',
            nav: 0,
          },
          {
            name: 'outboundList',
            path: 'outboundList',
            nav: 2,
          },
          {
            name: 'logisticsQuery',
            path: 'logisticsQuery',
            nav: 2,
          },
        ],
      },
      {
        name: 'StoreLease',
        path: 'StoreLease',
        icon: '&#xe88d;',
        component: LayoutSide,
        redirect: 'StoreLease/StoreLeases',
        nav: 1,
        children: [
          {
            name: 'StoreLeases',
            path: 'StoreLeases',
            nav: 2,
          },
          {
            name: 'MayApplyStore',
            path: 'MayApplyStore',
            nav: 2,
          },
          {
            name: 'MayApplyStoreInfo',
            path: 'MayApplyStore/MayApplyStoreInfo',
            nav: 0,
          },
          {
            name: 'LeaseAudit',
            path: 'MayApplyStore/LeaseAudit',
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
