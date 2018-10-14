import { testSaga } from 'redux-saga-test-plan';
import { updateEventViaModal } from './index';
import * as actions from '../../actions/eventModal';
import * as eventActions from '../../actions/events';
import { updateEvent } from '../../sagas/events';
import { updateErrorSelector } from '../../selectors/events';

const api = {
  updateEvent: jest.fn()
};

describe('Event Modal Sagas', () => {
  describe('updateEventViaModal', () => {
    it('updates the event successfully', () => {
      const action = {
        payload: '111'
      };
      testSaga(updateEventViaModal, api, action)
        .next()
        .call(updateEvent, api, action)
        .next()
        .select(updateErrorSelector)
        .next(null)
        .put(actions.closeEventModal())
        .next()
        .put(eventActions.getEvents())
        .next()
        .isDone();
    });

    it('short-circuits on update failure', () => {
      const action = {
        payload: '111'
      };
      testSaga(updateEventViaModal, api, action)
        .next()
        .call(updateEvent, api, action)
        .next()
        .select(updateErrorSelector)
        .next('Error!')
        .isDone();
    });
  });
});

