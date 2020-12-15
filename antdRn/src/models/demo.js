import { groupAutoByAliasName} from '../services/api';
export default {
  namespace: 'demo',
  state: {
    abc: 'index',
    groupTypeData:[]
  },
  effects: {
    // 组方式
    * groupType(_, { call, put }) {
      const data = yield call(groupAutoByAliasName);
      console.log('data~~~~~',data)
      if (data && data.code === 200) {
        yield put({
          type: 'updateState',
          payload: { groupTypeData: data.data }
        });
      } else {
        // message.error(response.message);
      }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
}