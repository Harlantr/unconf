import * as actionTypes from '../../actions/events/types';

export const initialState = {
  events: [],
  eventsLoading: false,
  eventsError: null,
  updateLoading: false,
  updateError: null
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case actionTypes.GET_EVENTS:
      return {
        ...state,
        eventsLoading: true,
        eventsError: null
      };

    case actionTypes.GET_EVENTS_OK:
      return {
        ...state,
        events: payload,
        eventsLoading: false,
        eventsError: null
      };

    case actionTypes.GET_EVENTS_ERR:
      return {
        ...state,
        eventsError: error,
        eventsLoading: false
      };

    case actionTypes.UPDATE_EVENT:
      return {
        ...state,
        updateLoading: true,
        updateError: null
      };

    case actionTypes.UPDATE_EVENT_OK:
      return {
        ...state,
        updateLoading: false,
        updateError: null
      };

    case actionTypes.UPDATE_EVENT_ERR:
      return {
        ...state,
        updateLoading: false,
        updateError: error
      };

    default:
      return state;
  }
};
