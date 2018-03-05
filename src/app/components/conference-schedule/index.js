import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../../actions/events';
import {
  eventsSelector,
  eventsErrorSelector
} from '../../../selectors/events';
import Event from '../../components/event';

const ConferenceSchedule = ({
  events,
  eventsError,
  getEvents
}) => (
  <div>
    <h1>Events</h1>
    <button onClick={getEvents}>
        Get Events
    </button>
    {
    eventsError
      ? <h3>Error: {eventsError}</h3>
      : events.map(event => <Event key={event._id} event={event} />)
  }
  </div>
);

ConferenceSchedule.propTypes = {
  events: PropTypes.arrayOf(object).isRequired,
  eventsError: PropTypes.string,
  getEvents: PropTypes.func.isRequired
};

ConferenceSchedule.defaultProps = {
  eventsError: null
};

const mapStateToProps = state => ({
  events: eventsSelector(state),
  eventsError: eventsErrorSelector(state)
});

const mapDispatchToProps = {
  getEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConferenceSchedule);
