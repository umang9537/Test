import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHECK_USERNAME,
  CHECK_USERNAME_SUCCESS,
  CHECK_USERNAME_FAIL,
  RESET_LOGIN_CODE,
} from './actionType';

// common success
export const login = rqeuserdata => ({
  type: LOGIN,
  payload: rqeuserdata,
});

export const loginSuccess = (actionType, data) => ({
  type: LOGIN_SUCCESS,
  payload: {actionType, data},
});

export const loginFail = (actionType, error) => ({
  type: LOGIN_FAIL,
  payload: {actionType, error},
});

//checkusername
export const checkUsername = rqeuserdata => ({
  type: CHECK_USERNAME,
  payload: rqeuserdata,
});

export const checkUsernameSuccess = (actionType, data) => ({
  type: CHECK_USERNAME_SUCCESS,
  payload: {actionType, data},
});

export const checkUsernameFail = (actionType, error) => ({
  type: CHECK_USERNAME_FAIL,
  payload: {actionType, error},
});

export const resetLoginCode = rqeuserdata => ({
  type: RESET_LOGIN_CODE,
});
