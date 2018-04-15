import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/events';
import * as actions from '../../actions/events';
import * as actionTypes from '../../actions/events/types';

export function* getEvents() {
  try {
    const data = yield call(api.getEvents);
    yield put(actions.getEventsOk(data));
  } catch (err) {
    yield put(actions.getEventsErr(err.message));
  }
}

export function* getEventsWatcher() {
  yield takeEvery(actionTypes.GET_EVENTS, getEvents);
}

export function* updateEvent({ payload }) {
  try {
    const data = yield call(api.updateEvent, payload);
    yield put(actions.updateEventOk(data));
  } catch (err) {
    yield put(actions.updateEventErr(err.message));
  }
}

export function* updateEventwatcher() {
  yield takeEvery(actionTypes.UPDATE_EVENT, updateEvent);
}
