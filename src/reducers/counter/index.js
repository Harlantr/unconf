import {
  INCREMENT_ASYNC_REQUESTED,
  INCREMENT,
  DECREMENT_ASYNC_REQUESTED,
  DECREMENT,
} from '../../constants/counterActions';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Update state with new count
    case INCREMENT:
      return {
        ...state,
        count: action.count,
        isIncrementing: action.isIncrementing,
      };

    // Set isIncrementing bit
    case INCREMENT_ASYNC_REQUESTED:
      return {
        ...state,
        isIncrementing: action.isIncrementing,
      };

    // Update state with new count
    case DECREMENT:
      return {
        ...state,
        count: action.count,
        isDecrementing: action.isDecrementing,
      };

    // Set isDecrementing bit
    case DECREMENT_ASYNC_REQUESTED:
      return {
        ...state,
        isDecrementing: action.isDecrementing,
      };

    default:
      return state;
  }
};
