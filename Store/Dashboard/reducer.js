import {
  GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
} from './actionType';

const INIT_STATE = {
  dashboardData: [],
  dashboardCode: 0,
};

const dashboardreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DASHBOARD_SUCCESS:
      console.log('GET_DASHBOARD_SUCCESS =====>', action.payload);
      switch (action.payload.actionType) {
        case GET_DASHBOARD:
          return {
            ...state,
            dashboardData: action.payload.data,
            dashboardCode: action.payload.data.code,
          };

        default:
          return {...state};
      }
    case GET_DASHBOARD_FAIL:
      console.log('GET_DASHBOARD_FAIL =====>', action.payload);
      switch (action.payload.actionType) {
        case GET_DASHBOARD:
          return {
            ...state,
            error: action.payload.error,
          };
        default:
          return {...state};
      }

    default:
      return state;
  }
};

export default dashboardreducer;
