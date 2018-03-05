import { getEventsWatcher } from './events';
import { getConfDataWatcher } from './conf';

export default function* IndexSaga() {
  yield [
    getEventsWatcher(),
    getConfDataWatcher()
  ];
}
