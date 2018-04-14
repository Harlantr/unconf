import { call, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from '../../actions/eventModal';
import * as actionTypes from '../../actions/eventModal/types';
import { updateEvent } from '../../sagas/events';
import { updateErrorSelector } from '../../selectors/events';

function* updateEventViaModal(action) {
  yield call(updateEvent, action);
  const updateError = yield select(updateErrorSelector);
  if (!updateError) {
    yield put(actions.closeEventModal());
  }
}

export function* updateEventViaModalwatcher() {
  yield takeEvery(actionTypes.UPDATE_EVENT_VIA_MODAL, updateEventViaModal);
}
