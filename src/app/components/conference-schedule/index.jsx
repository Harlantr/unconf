import React from 'react';
import { connect } from 'react-redux';
import { initialDataLoading, initialDataError } from '../../../selectors/conf-event-combo';
import Component from './component';
import Error from './error';
import Loading from './loading';

/*
  Conference Schedule wrapper component
  Checks for loading/errors before trying to render the actual schedule
 */
export const ConferenceScheduleWrapper = ({
  intialDataLoading,
  initialDataError
}) => (
  <div>
    {
      intialDataLoading
        ? <Loading />
        : (
          initialDataError
            ? <Error />
            : <Component />
        )
    }
  </div>
);

const mapStateToProps = state => ({
  intialDataLoading: initialDataLoading(state),
  initialDataError: initialDataError(state)
});

export default connect(
  mapStateToProps,
  {},
)(ConferenceScheduleWrapper);
