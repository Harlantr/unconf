import * as actionTypes from './types';

export const getConfData = () => ({
  type: actionTypes.GET_CONF_DATA
});

export const getConfDataOk = payload => ({
  type: actionTypes.GET_CONF_DATA_OK,
  payload
});

export const getConfDataErr = error => ({
  type: actionTypes.GET_CONF_DATA_ERR,
  error
});
