import * as actionTypes from './types';

export const openEventModal = payload => ({
  type: actionTypes.OPEN_EVENT_MODAL,
  payload
});

export const closeEventModal = () => ({
  type: actionTypes.CLOSE_EVENT_MODAL
});

export const updateEventViaModal = payload => ({
  type: actionTypes.UPDATE_EVENT_VIA_MODAL,
  payload
});
