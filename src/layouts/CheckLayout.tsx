import type { ConnectState } from '@/models/connect';
import type { BasicLayoutProps, MenuDataItem, Settings } from '@ant-design/pro-layout';
import type { FC } from 'react';
import React, { useEffect } from 'react';
import type { ConnectProps, Dispatch } from 'umi';
import { connect, history } from 'umi';
import SeparateLayout from './SeparateLayout';

export type CheckLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: BasicLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
} & ConnectProps;
const CheckLayout: FC<CheckLayoutProps> = (props) => {
  const { dispatch } = props;
  return <SeparateLayout {...props} />;
};

export default connect(({ global }: ConnectState) => {
  return {
    collapsed: global.collapsed,
  };
})(CheckLayout);
