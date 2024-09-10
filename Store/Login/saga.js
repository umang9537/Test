import {call, put, takeEvery, all, fork} from 'redux-saga/effects';

// Ecoomerce Redux States
import {LOGIN, CHECK_USERNAME} from './actionType';

import {
  loginSuccess,
  loginFail,
  checkUsernameSuccess,
  checkUsernameFail,
} from './action';

//Include Both Helper File with needed methods
import {checkUsernameapi, loginapi} from '../../helper/practical_helper';

function* login({payload: rqeuserdata}) {
  try {
    // console.log('rqeuserdata=====', rqeuserdata);
    const response = yield call(loginapi, rqeuserdata);
    // console.log('response=====', response);
    yield put(loginSuccess(LOGIN, response));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* checkusername({payload: rqeuserdata}) {
  try {
    // console.log('rqeuserdata=====', rqeuserdata);
    const response = yield call(checkUsernameapi, rqeuserdata);
    // console.log('response=====', response);
    yield put(checkUsernameSuccess(CHECK_USERNAME, response));
  } catch (error) {
    yield put(checkUsernameFail(error));
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(CHECK_USERNAME, checkusername);
}

export default loginSaga;
