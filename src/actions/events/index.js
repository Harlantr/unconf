import * as actionTypes from './types';

export const getEvents = () => ({
  type: actionTypes.GET_EVENTS
});

export const getEventsOk = payload => ({
  type: actionTypes.GET_EVENTS_OK,
  payload
});

export const getEventsErr = error => ({
  type: actionTypes.GET_EVENTS_ERR,
  error
});

export const updateEvent = payload => ({
  type: actionTypes.UPDATE_EVENT,
  payload
});

export const updateEventOk = payload => ({
  type: actionTypes.UPDATE_EVENT_OK,
  payload
});

export const updateEventErr = error => ({
  type: actionTypes.UPDATE_EVENT_ERR,
  error
});
