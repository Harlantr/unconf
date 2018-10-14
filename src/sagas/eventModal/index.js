import { call, put, select } from 'redux-saga/effects';
import * as actions from '../../actions/eventModal';
import * as eventActions from '../../actions/events';
import { updateEvent } from '../../sagas/events';
import { updateErrorSelector } from '../../selectors/events';

export function* updateEventViaModal(api, action) {
  yield call(updateEvent, api, action);
  const updateError = yield select(updateErrorSelector);
  if (!updateError) {
    yield put(actions.closeEventModal());
    yield put(eventActions.getEvents());
  }
}
