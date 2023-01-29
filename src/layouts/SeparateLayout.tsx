/* eslint-disable no-param-reassign */
import defaultSettings from '../../config/defaultSettings';
import * as ICON from '@ant-design/icons';
import ProLayout from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { Link } from 'umi';

const SeparateLayout: React.FC<any> = (props) => {
  const { dispatch, children } = props;
  const systemTitle = defaultSettings.title; // 系统名称

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  const getFirstVisiblePage: any = (item: any) => {
    if (item && item.children && item.children.length) {
      return (
        getFirstVisiblePage(item.children.find((i: any) => !i.hideInMenu)) ||
        item.path
      );
    }
    return item && item.path;
  };

  const transformData = defaultSettings.routes1;

  return transformData.length ? (
    <>
      <ProLayout
        logo={false}
        onCollapse={handleMenuCollapse}
        menuItemRender={(menuItemProps, defaultDom: any) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          const targetUrl = menuItemProps.meta?.redirect || menuItemProps.path;
          return <Link to={targetUrl}>{defaultDom}</Link>;
        }}
        itemRender={(route) => {
          return <span>{route.breadcrumbName}</span>;
        }}
        headerHeight={64}
        menuDataRender={() => transformData}
        {...props}
        {...defaultSettings}
        breadcrumbRender={(routes: any = []) => {
          return [
            {
              path: '',
              breadcrumbName: systemTitle,
            },
            ...routes,
          ];
        }}
      >
        {children}
      </ProLayout>
    </>
  ) : null;
};

export default SeparateLayout;
