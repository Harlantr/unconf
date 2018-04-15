import { createSelector } from 'reselect';

export const root = state => state.globalMessages;

export const messagesSelector = createSelector(
  root,
  globalMessages => globalMessages.messages
);
