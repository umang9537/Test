import {all, fork} from 'redux-saga/effects';

import loginSaga from './Login/saga';
import dashboardSaga from './Dashboard/saga';

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(dashboardSaga)]);
}
