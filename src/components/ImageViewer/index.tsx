import { Image, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import emptyImg from './empty.png';
import errorImg from './error.png';
import loadingImg from './loading.png';

export default function ImageViewer(props: {
  imageKey?: string;
  data?: string;
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  src?: any;
}) {
  const { imageKey, width = 'auto', data, children, height = 'auto', src } = props;
  const [imgData, setimgData] = useState('');
  const [fallBack, setFallBack] = useState(loadingImg);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setimgData(src);
  }, [src]);

  if (children) {
    return (
      <>
        <span onClick={() => setVisible(true)}>{children}</span>
        <Modal width={500} visible={visible} onCancel={() => setVisible(false)} footer={false}>
          <img width="98%" height={height} src={src || imgData} alt="图片" />
        </Modal>
      </>
    );
  }

  return <Image width={width} height={height} src={imgData} fallback={fallBack} />;
}
