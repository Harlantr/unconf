import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_OK,
  GET_EVENTS_ERR
} from '../../constants/eventActions';

const initialState = {
  events: null,
  eventsLoading: false,
  eventsError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // URequest list of events
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        eventsLoading: action.eventsLoading
      };

    // Set events
    case GET_EVENTS_OK:
      return {
        ...state,
        events: action.events,
        eventsLoading: false
      };

    // Set error
    case GET_EVENTS_ERR:
      return {
        ...state,
        eventsError: action.error,
        eventsLoading: false
      };

    default:
      return state;
  }
};
