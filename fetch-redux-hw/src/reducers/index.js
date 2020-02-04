import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import ligth from './ligth';
import appReducer from './appReducer';

export default combineReducers({
  routing: routerReducer,
  ligth,
  appReducer,
});
