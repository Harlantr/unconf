import reducer, { initialState } from './index';
import * as actions from '../../actions/conf';

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

  it('handles getConfData', () => {
    const action = actions.getConfData();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      confDataLoading: true
    });
  });

  it('handles getConfDataOk', () => {
    const data = {
      author: 'Thomas',
      roomList: [{}],
      startTime: new Date(),
      endTime: new Date()
    };
    const action = actions.getConfDataOk(data);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      ...data,
      confDataLoading: false,
      confDataError: null
    });
  });

  it('handles getConfDataErr', () => {
    const error = 'Something bad happened...';
    const action = actions.getConfDataErr(error);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      ...initialState,
      confDataError: error,
      confDataLoading: false
    });
  });
});

