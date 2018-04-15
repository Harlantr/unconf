import { getEventsWatcher, updateEventwatcher } from './events';
import { getConfDataWatcher } from './conf';
import { updateEventViaModalwatcher } from './eventModal';

export default function* IndexSaga() {
  yield [
    getEventsWatcher(),
    getConfDataWatcher(),
    updateEventwatcher(),
    updateEventViaModalwatcher()
  ];
}
