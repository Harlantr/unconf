import {
  incrementAsyncWatcher,
  decrementAsyncWatcher,
} from './counter';

export default function* IndexSaga() {
  yield [
    incrementAsyncWatcher(),
    decrementAsyncWatcher(),
  ];
}
