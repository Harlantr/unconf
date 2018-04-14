import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/conf';
import * as actions from '../../actions/conf';
import * as actionTypes from '../../actions/conf/types';

export function* getConfData() {
  try {
    const data = yield call(api.getConfData);
    yield put(actions.getConfDataOk(data));
  } catch (err) {
    yield put(actions.getConfDataErr(err.message));
  }
}

export function* getConfDataWatcher() {
  yield takeEvery(actionTypes.GET_CONF_DATA, getConfData);
}
