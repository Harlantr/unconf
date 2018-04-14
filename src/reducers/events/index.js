import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_OK,
  GET_EVENTS_ERR
} from '../../constants/eventActions';

const initialState = {
  events: [],
  eventsLoading: false,
  eventsError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Request list of events
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        eventsLoading: true
      };

    // Set events
    case GET_EVENTS_OK:
      return {
        ...state,
        events: action.events,
        eventsLoading: false
      };

    // Set event error
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
