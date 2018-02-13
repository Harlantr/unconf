import React from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import {
  getEvents
} from '../../actions/events';
import {
  eventsSelector
} from '../../selectors/events';

const EventsList = ({
  events,
  getEvents
}) => (
  <div>
    <h1>Events</h1>
    <button onClick={getEvents}>
      Get Events
    </button>
    <div>
      { events && <pre>{JSON.stringify(events)}</pre> }
    </div>
  </div>
);

EventsList.propTypes = {
  events: PropTypes.arrayOf(object),
  getEvents: PropTypes.func.isRequired
};

EventsList.defaultProps = {
  events: null
};

const mapStateToProps = state => ({
  events: eventsSelector(state)
});

const mapDispatchToProps = {
  getEvents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventsList);
