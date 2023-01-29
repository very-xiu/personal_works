import ImageViewer from '@/components/ImageViewer';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Tooltip } from 'antd';
import { history, Link } from 'umi';
import styles from './index.less';
import listData from '@/assets/js/listData';
import { useState } from 'react';

export default function IndexPage() {
  console.log(history, listData);
  const tag = history.location.pathname.split('/')[1];
  const [data] = useState<any>(listData[tag]);
  console.log('data: ', data);

  return (
    <PageContainer title={false}>
      {data.map((item: any, i: number) => {
        return (
          <div key={i} className={styles.index_class}>
            <ImageViewer src={item.imgSrc} />
            <Tooltip title={item.title}>
              <span>标&emsp;&emsp;题：{item.title}</span>
            </Tooltip>
            {item.linkUrl && (
              <>
                <Tooltip title={item.username}>
                  <span>测试账号：{item.username}</span>
                </Tooltip>
                <Tooltip title={item.password}>
                  <span>测试密码：{item.password}</span>
                </Tooltip>
                <Tooltip title={item.linkUrl}>
                  <span>
                    网站链接：
                    <a href={item.linkUrl} target="_blank">
                      {item.linkUrl}
                    </a>
                  </span>
                </Tooltip>
              </>
            )}
          </div>
        );
      })}
    </PageContainer>
  );
}
