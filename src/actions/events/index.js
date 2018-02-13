import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_OK,
  GET_EVENTS_ERR
} from '../../constants/eventActions';

export const getEvents = () => ({
  type: GET_EVENTS_REQUEST
});

export const getEventsOk = events => ({
  type: GET_EVENTS_OK,
  events
});

export const getEventsErr = error => ({
  type: GET_EVENTS_ERR,
  error
});
