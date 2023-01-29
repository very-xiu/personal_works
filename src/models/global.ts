export type GlobalModelState = {
  collapsed: boolean;
  notices: {
    notReadNum: number;
    readNum: number;
  };
  passTips: any;
};

export type GlobalModelType = {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    changeLayoutCollapsed: any;
  };
};

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: {
      notReadNum: 0,
      readNum: 0,
    },
    passTips: '',
  },

  effects: {},

  reducers: {
    changeLayoutCollapsed(
      state = {
        notices: {
          notReadNum: 0,
          readNum: 0,
        },
        collapsed: true,
        passTips: '',
      },
      { payload }: any,
    ): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },
};

export default GlobalModel;
