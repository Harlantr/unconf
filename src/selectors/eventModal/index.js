import { createSelector } from 'reselect';

const root = state => state.eventModal;

export const eventSelector = createSelector(
  root,
  state => state.event
);

export const modalOpenSelector = createSelector(
  root,
  state => state.modalOpen
);
