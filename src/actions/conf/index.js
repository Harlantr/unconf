import {
  GET_CONF_DATA_REQUEST,
  GET_CONF_DATA_OK,
  GET_CONF_DATA_ERR
} from '../../constants/confActions';

export const getConfData = () => ({
  type: GET_CONF_DATA_REQUEST
});

export const getConfDataOk = payload => ({
  type: GET_CONF_DATA_OK,
  payload
});

export const getConfDataErr = error => ({
  type: GET_CONF_DATA_ERR,
  error
});
