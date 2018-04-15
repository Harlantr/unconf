import { createSelector } from 'reselect';

// Root "events" state object
const root = state => state.events;

export const eventsSelector = createSelector(
  root,
  state => state.events
);

export const eventsLoadingSelector = createSelector(
  root,
  state => state.eventsLoading
);

export const eventsErrorSelector = createSelector(
  root,
  state => state.eventsError
);

export const updateLoadingSelector = createSelector(
  root,
  state => state.updateLoading
);

export const updateErrorSelector = createSelector(
  root,
  state => state.updateError
);
