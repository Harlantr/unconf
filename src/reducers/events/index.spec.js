import reducer, { initialState } from './index';
import * as actions from '../../actions/events';

let state;
describe('Conference Reducer', () => {
  beforeEach(() => {
    state = { ...initialState };
  });

  it('returns initialState when passed an unknown action', () => {
    const action = {
      type: 'Nothing Much',
      payload: { }
    };

    const newState = reducer(state, action);
    expect(newState).toEqual(initialState);
  });

  it('handles getEvents', () => {
    const action = actions.getEvents();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      eventsLoading: true
    });
  });

  it('handles getEventsOk', () => {
    const data = [];
    const action = actions.getEventsOk(data);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      events: data,
      eventsLoading: false,
      eventsError: null
    });
  });

  it('handles getEventsErr', () => {
    const error = 'Something bad happened...';
    const action = actions.getEventsErr(error);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      eventsError: error,
      eventsLoading: false
    });
  });

  it('handles updateEvent', () => {
    const event = {
      id: 1
    };
    const action = actions.updateEvent(event);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      updateLoading: true,
      updateError: null
    });
  });

  it('handles updateEventOk', () => {
    const event = {
      id: 1
    };
    const action = actions.updateEventOk(event);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      updateLoading: false,
      eventsError: null
    });
  });

  xit('handles updateEventErr', () => {
    const error = 'Something bad happened...';
    const action = actions.updateEventErr(error);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      eventsError: error,
      eventsLoading: false
    });
  });
});
