import { createSelector } from 'reselect';

import { confDataLoadingSelector, confDataErrorSelector } from '../conf';
import { eventsLoadingSelector, eventsErrorSelector } from '../events';

export const initialDataLoading = createSelector(
  confDataLoadingSelector,
  eventsLoadingSelector,
  (confDataLoading, eventDataLoading) => confDataLoading || eventDataLoading
);

export const initialDataError = createSelector(
  confDataErrorSelector,
  eventsErrorSelector,
  (confDataError, eventDataError) => confDataError || eventDataError
);
