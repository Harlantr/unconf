import { call, put } from 'redux-saga/effects';
import * as actions from '../../actions/conf';

export function* getConfData(api) {
  try {
    const data = yield call(api.getConfData);
    yield put(actions.getConfDataOk(data));
  } catch (err) {
    yield put(actions.getConfDataErr(err.message));
  }
}
