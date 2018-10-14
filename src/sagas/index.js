import { takeEvery } from 'redux-saga/effects';
import * as eventsSagas from './events';
import * as eventsActionTypes from '../actions/events/types';
import * as confSagas from './conf';
import * as confActionTypes from '../actions/conf/types';
import * as eventModalSagas from './eventModal';
import * as eventModalActionTypes from '../actions/eventModal/types';
import * as eventsApi from '../api/events';
import * as confApi from '../api/conf';

export default function* IndexSaga() {
  yield [
    yield takeEvery(eventsActionTypes.GET_EVENTS, eventsSagas.getEvents, eventsApi),
    yield takeEvery(eventsActionTypes.UPDATE_EVENT, eventsSagas.updateEvent, eventsApi),
    yield takeEvery(confActionTypes.GET_CONF_DATA, confSagas.getConfData, confApi),
    yield takeEvery(
      eventModalActionTypes.UPDATE_EVENT_VIA_MODAL,
      eventModalSagas.updateEventViaModal,
      eventsApi
    )
  ];
}
