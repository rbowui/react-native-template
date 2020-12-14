export default {
  namespace: 'indexModel',
  state: {
      name:'123'
  },
  effects: {
    // *update({ payload }, { call, put }) {
    //   const data = yield call(columnEdit, { ...payload });
    //   if (data && data.code === 200) {
    //     message.success('编辑成功！');
    //     yield put({ type: 'updateState', payload: { modelVisible: false, modelEditSource: {} } });
    //     yield put({ type: 'getData' });
    //   } else if (data) {
    //     message.error(data.message || '添加失败！');
    //   } else {
    //     yield put({ type: 'updateState', payload: { radioVal:null } });
    //   }
    // },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
}