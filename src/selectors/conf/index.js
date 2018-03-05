import { createSelector } from 'reselect';

const root = state => state.conf;

export const roomListSelector = createSelector(
  root,
  state => state.roomList
);

export const roomListCountSelector = createSelector(
  root,
  state => state.roomList.length
);

export const confDataErrorSelector = createSelector(
  root,
  state => state.confDataError
);

export const confDataLoadingSelector = createSelector(
  root,
  state => state.confDataLoading
);

export const startTimeSelector = createSelector(
  root,
  state => state.startTime
);

export const endTimeSelector = createSelector(
  root,
  state => state.endTime
);
