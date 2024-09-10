import {call, put, takeEvery, all, fork} from 'redux-saga/effects';

// Ecoomerce Redux States
import {GET_DASHBOARD} from './actionType';

import {getDashboardSuccess, getDashboardFail} from './action';

//Include Both Helper File with needed methods
import {getDashboardApi} from '../../helper/practical_helper';

function* getdashboardsaga({payload: rqeuserdata}) {
  try {
    // console.log('rqeuserdata=====', rqeuserdata);
    const response = yield call(getDashboardApi, rqeuserdata);
    // console.log('response=====', response);
    yield put(getDashboardSuccess(GET_DASHBOARD, response));
  } catch (error) {
    yield put(getDashboardFail(error));
  }
}

function* dashboardSaga() {
  yield takeEvery(GET_DASHBOARD, getdashboardsaga);
}

export default dashboardSaga;
