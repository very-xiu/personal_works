declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'js-export-excel';

// google analytics interface
type GAFieldsObject = {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
};
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
  reloadAuthorized: () => void;
  JSEncrypt: any;
  WebControl: any;
}

declare let ga: Function;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;

declare module 'form-render/lib/antd' {
  import React from 'react';

  export interface FRProps {
    schema: Record<string, any>;
    formData: Record<string, any>;
    onChange: (data?: Record<string, any>) => void;
    onMount?: () => void;
    name?: string;
    column?: number;
    uiSchema?: Record<string, any>;
    widgets?: any;
    FieldUI?: any;
    fields?: any;
    mapping?: Record<string, any>;
    showDescIcon?: boolean;
    showValidate?: boolean;
    displayType?: string;
    onValidate?: any;
    readOnly?: boolean;
    labelWidth?: number | string;
  }
  class FormRender extends React.Component<FRProps> {}
  export default FormRender;
}
