import React from 'react';
import { connect } from 'react-redux';
import { initialDataLoading, initialDataError } from '../../../selectors/conf-event-combo';
import Component from './_component';
import Error from './_error';
import Loading from './_loading';

/*
  Conference Schedule wrapper component
  Checks for loading/errors before trying to render the actual schedule
 */
const ConferenceScheduleWrapper = ({
  intialDataLoading,
  initialDataError
}) => (
  <div>
    {
      intialDataLoading
        ? <Loading />
        : (
          initialDataError
            ? <Error error={initialDataError} />
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
