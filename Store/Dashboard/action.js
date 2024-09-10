import {
  GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
} from './actionType';

// common success
export const getDashboard = rqeuserdata => ({
  type: GET_DASHBOARD,
  payload: rqeuserdata,
});

export const getDashboardSuccess = (actionType, data) => ({
  type: GET_DASHBOARD_SUCCESS,
  payload: {actionType, data},
});

export const getDashboardFail = (actionType, error) => ({
  type: GET_DASHBOARD_FAIL,
  payload: {actionType, error},
});
