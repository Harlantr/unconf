import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import events from './events';
import conf from './conf';
import eventModal from './eventModal';

export default combineReducers({
  router: routerReducer,
  events,
  conf,
  eventModal,
  form: formReducer
});
