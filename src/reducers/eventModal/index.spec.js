import reducer, { initialState } from './index';
import * as actions from '../../actions/eventModal';

let state;
describe('Event Modal Reducer', () => {
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

  it('opens the modal to the correct event', () => {
    const event = {
      id: 1
    };
    const action = actions.openEventModal(event);

    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      event,
      modalOpen: true
    });
  });

  it('closes the modal', () => {
    const action = actions.closeEventModal();

    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      event: {},
      modalOpen: false
    });
  });
});
