import reducer, { initialState } from './index';
import * as actions from '../../actions/globalMessage';

let state;
describe('Global Messages', () => {
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

  it('handles createMessage', () => {
    const payload = {
      id: 1,
      text: 'There was an error.',
      type: 'danger'
    };
    const action = actions.createMesssage(payload);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      messages: [...initialState.messages, payload]
    });
  });

  it('handles destroyMesssage', () => {
    state = {
      ...initialState,
      messages: [
        {
          id: 1,
          text: 'There was an error.',
          type: 'danger'
        }
      ]
    };
    const action = actions.destroyMesssage(1);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      messages: []
    });
  });
});
