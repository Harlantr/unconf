import { createSelector } from 'reselect';

// Root "events" state object
const eventsRoot = state => state.events;

export const eventsSelector = createSelector(
  eventsRoot,
  state => state.events
);

export const eventsLoadingSelector = createSelector(
  eventsRoot,
  state => state.eventsLoading
);

export const eventsErrorSelector = createSelector(
  eventsRoot,
  state => state.eventsError
);
