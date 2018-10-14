import { call, put } from 'redux-saga/effects';
import uuid from 'uuid/v4';
import * as actions from '../../actions/events';
import { createMesssage } from '../../actions/globalMessage';

export function* getEvents(api) {
  try {
    const data = yield call(api.getEvents);
    yield put(actions.getEventsOk(data));
  } catch (err) {
    yield put(actions.getEventsErr(err.message));
    yield put(createMesssage({
      id: uuid(),
      text: 'There was an error loading event data. Please try again.',
      type: 'danger'
    }));
  }
}

export function* updateEvent(api, { payload }) {
  try {
    const data = yield call(api.updateEvent, payload);
    yield put(actions.updateEventOk(data));
    yield put(createMesssage({
      id: uuid(),
      text: 'Event updated successfully!',
      type: 'success'
    }));
  } catch (err) {
    yield put(actions.updateEventErr(err.message));
    yield put(createMesssage({
      id: uuid(),
      text: 'There was an error updating event data. Please try again.',
      type: 'danger'
    }));
  }
}
