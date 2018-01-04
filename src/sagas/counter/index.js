import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  INCREMENT_ASYNC_REQUESTED,
  DECREMENT_ASYNC_REQUESTED,
} from '../../constants/counterActions';

import * as actions from '../../actions/counter';

function* incrementAsync(action) {
  // Wait 2 seconds
  yield call(delay, 2000);

  // Dispatch INCREMENT with new count.
  yield put(actions.increment(action.count));
}

function* decrementAsync(action) {
  // Wait 2 seconds
  yield call(delay, 2000);

  // Dispatch DECREMENT with new count
  yield put(actions.decrement(action.count));
}

export function* incrementAsyncWatcher() {
  yield takeEvery(INCREMENT_ASYNC_REQUESTED, incrementAsync);
}

export function* decrementAsyncWatcher() {
  yield takeEvery(DECREMENT_ASYNC_REQUESTED, decrementAsync);
}
