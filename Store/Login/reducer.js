import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CHECK_USERNAME,
  CHECK_USERNAME_SUCCESS,
  CHECK_USERNAME_FAIL,
  RESET_LOGIN_CODE,
} from './actionType';

const INIT_STATE = {
  loginData: [],
  loginCode: 0,
  checkUsernameData: [],
  checkUsernameCode: 0,
  loginMsg: [],
  loginMsg: [],
  checkUsernameMsg: [],
};

const loginreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    //   console.log('action.payload.data=====', action.payload);
      switch (action.payload.actionType) {
        case LOGIN:
          return {
            ...state,
            loginData: action.payload.data,
            loginCode: action.payload.data.code,
            loginMsg: action.payload.data.msg,
          };

        default:
          return {...state};
      }
    case LOGIN_FAIL:
      switch (action.payload.actionType) {
        case LOGIN:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return {...state};
      }

    //CHECK_USERNAME
    case CHECK_USERNAME_SUCCESS:
      switch (action.payload.actionType) {
        case CHECK_USERNAME:
          return {
            ...state,
            checkUsernameData: action.payload.data,
            checkUsernameCode: action.payload.data.code,
            checkUsernameMsg: action.payload.data.msg,
          };

        default:
          return {...state};
      }
    case CHECK_USERNAME_FAIL:
      switch (action.payload.actionType) {
        case CHECK_USERNAME:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return {...state};
      }

    case RESET_LOGIN_CODE:
      return {
        ...state,
        loginData: [],
        loginCode: 0,
        checkUsernameData: [],
        checkUsernameCode: 0,
        loginMsg: [],
        loginMsg: [],
        checkUsernameMsg: [],
      };

    default:
      return state;
  }
};

export default loginreducer;
