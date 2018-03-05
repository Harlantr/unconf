import { call, put, takeEvery } from 'redux-saga/effects';
import * as api from '../../api/conf';
import * as actions from '../../actions/conf';
import {
  GET_CONF_DATA_REQUEST
} from '../../constants/confActions';

function* getConfData() {
  try {
    const data = yield call(api.getConfData);
    yield put(actions.getConfDataOk(data));
  } catch (err) {
    yield put(actions.getConfDataErr(err.message));
  }
}

export function* getConfDataWatcher() {
  yield takeEvery(GET_CONF_DATA_REQUEST, getConfData);
}

export function* updateConfDataWatcher() {
  // yield takeEvery('', incrementAsync);
}
