import {
  INCREMENT_ASYNC_REQUESTED,
  INCREMENT,
  DECREMENT_ASYNC_REQUESTED,
  DECREMENT,
} from '../../constants/counterActions';

export const increment = count => ({
  type: INCREMENT,
  isIncrementing: false,
  count: count + 1,
});

export const incrementAsync = count => ({
  type: INCREMENT_ASYNC_REQUESTED,
  isIncrementing: true,
  count,
});

export const decrement = count => ({
  type: DECREMENT,
  isDecrementing: false,
  count: count - 1,
});

export const decrementAsync = count => ({
  type: DECREMENT_ASYNC_REQUESTED,
  isDecrementing: true,
  count,
});
