import * as actionTypes from '../../actions/conf/types';

const initialState = {
  author: null,
  roomList: [],
  startTime: null,
  endTime: null,
  confDataLoading: false,
  confDataError: null
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    // Request conference data
    case actionTypes.GET_CONF_DATA:
      return {
        ...state,
        confDataLoading: true
      };

    // Set conference data
    case actionTypes.GET_CONF_DATA_OK:
      return {
        ...state,
        ...payload,
        confDataLoading: false
      };

    // Set conference error
    case actionTypes.GET_CONF_DATA_ERR:
      return {
        ...state,
        confDataError: error,
        confDataLoading: false
      };

    default:
      return state;
  }
};
