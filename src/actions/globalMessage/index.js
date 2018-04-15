import * as actionTypes from './types';

export const createMesssage = payload => ({
  type: actionTypes.CREATE,
  payload
});

export const destroyMesssage = payload => ({
  type: actionTypes.DESTROY,
  payload
});
