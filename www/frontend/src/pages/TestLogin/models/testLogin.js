import { login } from '../../../services/api';

export default {
  namespace: 'testLogin',
  state: {
    loginInfo: {
      randomNumber: '0',
    }
  },
  reducers: {
    showLogin(state, { payload: response }) {
      console.log(response);
      state.loginInfo.randomNumber = response.data.randomNumber
      return {
        ...state,
      }
    }
  },
  effects: {
    *login({ payload }, { call, put }) {      
      const response = yield call(login, payload);
      yield put({
        type: 'showLogin',
        payload: response.data,
      });
    }
  }

}
