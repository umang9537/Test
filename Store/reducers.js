import {combineReducers} from 'redux';

import loginreducer from './Login/reducer';
import dashboardreducer from './Dashboard/reducer';

const rootReducer = combineReducers({
  loginreducer,
  dashboardreducer,
});

export default rootReducer;
