import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/events';
import * as actions from '../../actions/events';
import {
  GET_EVENTS_REQUEST
} from '../../constants/eventActions';

function* getEvents() {
  try {
    const data = yield call(api.getEvents);
    yield put(actions.getEventsOk(data));
  } catch (err) {
    yield put(actions.getEventsErr(err));
  }
}

export function* getEventsWatcher() {
  yield takeEvery(GET_EVENTS_REQUEST, getEvents);
}

export function* addEventWatcher() {
  // yield takeEvery('', incrementAsync);
}
