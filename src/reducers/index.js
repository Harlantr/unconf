import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import events from './events';
import conf from './conf';

export default combineReducers({
  router: routerReducer,
  events,
  conf
});
