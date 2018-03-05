import {
  GET_CONF_DATA_REQUEST,
  GET_CONF_DATA_OK,
  GET_CONF_DATA_ERR
} from '../../constants/confActions';

const initialState = {
  author: null,
  roomList: [],
  startTime: null,
  endTime: null,
  confDataLoading: false,
  confDataError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Request conference data
    case GET_CONF_DATA_REQUEST:
      return {
        ...state,
        confDataLoading: true
      };

    // Set conference data
    case GET_CONF_DATA_OK:
      return {
        ...state,
        ...action.payload,
        confDataLoading: false
      };

    // Set conference error
    case GET_CONF_DATA_ERR:
      return {
        ...state,
        confDataError: action.error,
        confDataLoading: false
      };

    default:
      return state;
  }
};
