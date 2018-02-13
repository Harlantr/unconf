import {
  getEventsWatcher
} from './events';

export default function* IndexSaga() {
  yield [
    getEventsWatcher()
  ];
}
