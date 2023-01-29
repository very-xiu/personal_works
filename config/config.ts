// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';

export default defineConfig({
  mfsu: {},
  hash: true,
  history: { type: 'browser' },
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 10,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '@/layouts/CheckLayout',
      routes: defaultSettings.routes1,
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    'layout-header-background': '#467FED',
    'table-header-bg': '#F3F8FA',
    'table-header-color': '#44474D',
    'btn-border-radius-base': '4px',
    'card-padding-base': '16px',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  manifest: {
    // basePath: '/',
  },
  // outputPath: 'build',
  publicPath: 'https://very-xiu.github.io/personal_works/',
});
