import { createSelector } from 'reselect';

const root = state => state.conf;

export const confDataErrorSelector = createSelector(
  root,
  state => state.confDataError
);

export const confDataLoadingSelector = createSelector(
  root,
  state => state.confDataLoading
);
