import { testSaga } from 'redux-saga-test-plan';
import * as actions from '../../actions/events';
import { createMesssage } from '../../actions/globalMessage';
import {
  getEvents,
  updateEvent
} from './index';

const api = {
  getEvents: jest.fn(),
  updateEvent: jest.fn()
};

// Mock uuid moduleto return predictable value
jest.mock('uuid/v4', () => () => 1);

describe('Events Sagas', () => {
  describe('getEvents', () => {
    it('dispatches getEventsOk', () => {
      const data = {
        events: []
      };
      testSaga(getEvents, api)
        .next()
        .call(api.getEvents)
        .next(data)
        .put(actions.getEventsOk(data))
        .next()
        .isDone();
    });

    it('dispatches getEventsError', () => {
      const error = 'bad stuff';
      testSaga(getEvents, api)
        .next()
        .call(api.getEvents)
        .throw(new Error(error))
        .put(actions.getEventsErr(error))
        .next()
        .put(createMesssage({
          id: 1,
          text: 'There was an error loading event data. Please try again.',
          type: 'danger'
        }))
        .next()
        .isDone();
    });
  });

  describe('updateEvent', () => {
    it('dispatches updateEventOk', () => {
      const data = {
        event: {}
      };

      const action = {
        payload: '111'
      };

      testSaga(updateEvent, api, action)
        .next()
        .call(api.updateEvent, action.payload)
        .next(data)
        .put(actions.updateEventOk(data))
        .next()
        .put(createMesssage({
          id: 1,
          text: 'Event updated successfully!',
          type: 'success'
        }))
        .next()
        .isDone();
    });

    it('dispatches updateEventErr', () => {
      const action = {
        payload: '111'
      };
      const error = 'bad stuff';
      testSaga(updateEvent, api, action)
        .next()
        .call(api.updateEvent, action.payload)
        .throw(new Error(error))
        .put(actions.updateEventErr(error))
        .next()
        .put(createMesssage({
          id: 1,
          text: 'There was an error updating event data. Please try again.',
          type: 'danger'
        }))
        .next()
        .isDone();
    });
  });
});
