import { Settings as ProSettings } from '@ant-design/pro-layout';
import * as ICON from '@ant-design/icons';
import React from 'react';

type DefaultSettings = ProSettings & {
  pwa: boolean;
  routes1: any[];
};

const proSettings: DefaultSettings = {
  navTheme: 'light',
  // 腾晖蓝
  primaryColor: '#5395ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '个人作品展示(免费静态资源网站-网络请求加载速度较慢，请谅解)',
  pwa: false,
  iconfontUrl: '',
  splitMenus: false,
  routes1: [
    {
      path: '/',
      redirect: '/personal_works',
    },
    {
      path: '/personal_works',
      name: 'vue作品预览',
      component: '@/pages/index',
      icon: React.createElement(ICON["HeatMapOutlined"]),
    },
    {
      path: '/react',
      name: 'react作品预览',
      component: '@/pages/index',
      icon: React.createElement(ICON["CodepenOutlined"]),
    },
    {
      path: '/minProgram',
      name: '小程序作品预览',
      component: '@/pages/index',
      icon: React.createElement(ICON["WechatOutlined"]),
    },
    {
      path: '/noFramePractice',
      name: '非框架练习项目',
      component: '@/pages/index',
      icon: React.createElement(ICON["CodepenOutlined"]),
    },
  ],
};

export type { DefaultSettings };

export default proSettings;
