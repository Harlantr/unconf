import { createSelector } from 'reselect';

// Root "events" state object
const root = state => state.eventModal;

export const eventSelector = createSelector(
  root,
  state => state.event
);

export const modalOpenSelector = createSelector(
  root,
  state => state.modalOpen
);
